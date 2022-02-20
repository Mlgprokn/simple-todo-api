import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

/** Routes for users */
router.get('/validate', controller.validateToken);
router.post('/register', controller.register);
router.post('/login', controller.login);

export = router;
