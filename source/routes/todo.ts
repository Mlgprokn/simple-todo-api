import express from 'express';
import controller from '../controllers/todo';
import extractJWT from '../middleware/extractJWT';

const router = express.Router();

/** Routes for todos */
router.get('/get', extractJWT, controller.getAllTodos);
router.post('/create', extractJWT, controller.createTodo);
router.patch('/update', extractJWT, controller.updateTodo);
router.delete('/delete', extractJWT, controller.deleteTodo);

export = router;
