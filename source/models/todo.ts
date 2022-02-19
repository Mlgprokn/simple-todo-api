import ITodo from '../interfaces/todo';
import mongoose, { Schema } from 'mongoose';

/** Create the Schema */
const TodoSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        isCompleted: { type: Boolean }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ITodo>('Todo', TodoSchema);
