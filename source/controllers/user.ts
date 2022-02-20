import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import bcryptjs, { hash } from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../models/user';
import signJWT from '../functions/signJWT';

/** The namespace */
const NAMESPACE = 'TodoController';

/** Validates the JWT token */
const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Validating token`);

    return res.status(200).json({
        message: 'Authorized'
    });
};

/** Registers a new user */
const register = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Registering new user`);

    let { username, password } = req.body;

    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(500).json({
                message: hashError.message
            });
        }

        const _user = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            password: hash
        });

        return _user
            .save()
            .then((user) => {
                return res.status(201).json({
                    user: user
                });
            })
            .catch((error) => {
                logging.error(NAMESPACE, error.message, error);

                return res.status(500).json({
                    message: error.message
                });
            });
    });
};

/** Logs in a user */
const login = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Login`);

    let { username, password } = req.body;
    User.find({ username })
        .exec()
        .then((users) => {
            if (users.length !== 1) {
                return res.status(401).json({
                    message: 'Wrong username or password'
                });
            }

            bcryptjs.compare(password, users[0].password, (error, result) => {
                if (error) {
                    logging.error(NAMESPACE, error.message, error);

                    return res.status(401).json({
                        message: 'Wrong username or password'
                    });
                } else if (result) {
                    signJWT(users[0], (_error, token) => {
                        if (_error) {
                            logging.error(NAMESPACE, 'Unable to sign in:', error);

                            return res.status(401).json({
                                message: 'Wrong username or password'
                            });
                        } else if (token) {
                            res.status(200).json({
                                user: users[0],
                                token
                            });
                        }
                    });
                }
            });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message
            });
        });
};

export default { validateToken, register, login };
