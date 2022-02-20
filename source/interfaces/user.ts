import { Document } from 'mongoose';

/** The user interface */
export default interface IUser extends Document {
    username: string;
    password: string;
}
