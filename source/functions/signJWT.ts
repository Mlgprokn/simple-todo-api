import jwt from 'jsonwebtoken';
import config from '../config/config';
import logging from '../config/logging';
import IUser from '../interfaces/user';

/** The namespace */
const NAMESPACE = 'Auth';

/** Create a new JWT token for the user */
const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {
    logging.info(NAMESPACE, `Signing token fro ${user.username}`);

    let currentTime = new Date().getDate();
    let expirationTime = currentTime + Number(config.sever.token.expireTime) * 100;

    try {
        jwt.sign(
            {
                username: user.username
            },
            config.sever.token.secret,
            {
                issuer: config.sever.token.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTime
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error) {
        logging.error(NAMESPACE, 'An error occured', error);
        callback(new Error('Internal error'), null);
    }
};

export default signJWT;
