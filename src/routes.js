import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

// Rotas

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Todas as rotas abaixo usarão o middlewares de authorization
routes.use(authMiddleware);

routes.put('/users', UserController.update);

// Rotas de tasrefas (Tasks)

routes.post('/tasks', TaskController.store);

routes.get('/tasks', TaskController.index);

routes.put('/tasks/:task_id', TaskController.update);

routes.delete('/tasks/:task_id', TaskController.delete);

export default routes;
