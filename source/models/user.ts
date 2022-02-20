import IUser from '../interfaces/user';
import mongoose, { Schema } from 'mongoose';

/** Create the Schema */
const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUser>('User', UserSchema);
