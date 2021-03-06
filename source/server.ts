import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import todoRoutes from './routes/todo';
import userRoutes from './routes/user';
import mongoose from 'mongoose';

const NAMESPACE = 'Server';
const router = express();

/** Connect to Mongo */
console.log(config.mongo.options);
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        logging.info(NAMESPACE, 'Connected to mongoDB!');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    });

/** Logging the request */
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });

    next();
});

/** Parse the request */
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/** Rules of out API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET POST PATCH DELETE');
        return res.status(200).json({});
    }

    next();
});

/** Routes */
router.use('/api/todos', todoRoutes);
router.use('/api/users', userRoutes);

/** Error Handling */
router.use((req, res, next) => {
    const error = new Error('not found');

    return res.status(404).json({
        message: error.message
    });
});

/** Create the server */
const httpServer = http.createServer(router);
httpServer.listen(config.sever.port, () => logging.info(NAMESPACE, `Server running on ${config.sever.hostname}:${config.sever.port}`));
