import { Router } from 'express';
import { index } from '../controllers/homeController';

const route = new Router();

route.get('/', index);

export default route;
