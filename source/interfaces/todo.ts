import { Document } from 'mongoose';

/** The todo interface */
export default interface ITodo extends Document {
    title: string;
    isCompleted: boolean;
}
