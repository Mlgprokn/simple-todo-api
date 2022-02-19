import express from 'express';
import controller from '../controllers/todo';

const router = express.Router();

router.get('/get', controller.getAllTodos);
router.post('/create', controller.createTodo);
router.patch('/update', controller.updateTodo);
router.delete('/delete', controller.deleteTodo);

export = router;
