import express from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { BookRoutes } from '../modules/books/book.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { OrderRoute } from '../modules/order/order.route';
import { ProfileRoute } from '../modules/profile/profile.route';
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
  {
    path: '/categories',
    routes: CategoryRoutes,
  },
  {
    path: '/books',
    routes: BookRoutes,
  },
  {
    path: '/orders',
    routes: OrderRoute,
  },
  {
    path: '/profile',
    routes: ProfileRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
