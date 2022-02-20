import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import jwt from 'jsonwebtoken';
import config from '../config/config';

/** The namespace */
const NAMESPACE = 'Auth';

/** Decodes the jwt token */
const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Validating token`);

    let token = req.headers.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(token, config.sever.token.secret, (error, decoded) => {
            if (error) {
                return res.status(401).json({
                    message: error.message
                });
            }

            res.locals.jwt = decoded;
            next();
        });
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};

export default extractJWT;
