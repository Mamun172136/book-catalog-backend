import express from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { UserRoutes } from '../modules/users/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth/signup',
    routes: authRoutes,
  },
  {
    path: '/auth',
    routes: authRoutes,
  },
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/categories/create-category',
    routes: CategoryRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
