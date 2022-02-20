import dotenv from 'dotenv';

dotenv.config();

/** Mongo settings */
const MONGO_OPTIONS = {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'Mlgprokn';
const MONGO_PASSWORD = process.env.MONGO_USERNAME || 'laina';
const MONGO_HOST = process.env.MONGO_URL || `todo.d9lq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
};

/** Server settings */
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

/** JWT settings */
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 86400;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || 'domain';
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || 'KaNdRgUkXp2s5v8y';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    token: {
        expireTime: SERVER_TOKEN_EXPIRETIME,
        issuer: SERVER_TOKEN_ISSUER,
        secret: SERVER_TOKEN_SECRET
    }
};

const config = {
    mongo: MONGO,
    sever: SERVER
};

export default config;
