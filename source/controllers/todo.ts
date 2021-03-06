import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import Todo from '../models/todo';
import mongoose from 'mongoose';

/** The namespace */
const NAMESPACE = 'TodoController';

/** Gets all todos */
const getAllTodos = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Get all todos`);

    Todo.find()
        .exec()
        .then((results) => {
            return res.status(200).json({
                todos: results
            });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message
            });
        });
};

/** Creates a new todo */
const createTodo = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Create new todo`);

    let { title } = req.body;

    const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        title,
        isCompleted: false
    });

    return todo
        .save()
        .then((result) => {
            return res.status(201).json({
                todo: result
            });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message
            });
        });
};

/** Updates a todo */
const updateTodo = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Updating a todo`);

    let _id = req.body._id;

    return Todo.findByIdAndUpdate(_id, req.body, { new: true })
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: 'Record not found'
                });
            } else {
                return res.status(201).json({
                    todo: result
                });
            }
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message
            });
        });
};

/** Deletes a todo */
const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Deleting a todo`);

    let _id = req.body._id;

    return Todo.findByIdAndRemove(_id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: 'Record not found'
                });
            } else {
                return res.status(201).json({
                    todo: result
                });
            }
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message
            });
        });
};

export default { getAllTodos, createTodo, updateTodo, deleteTodo };
