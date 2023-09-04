"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const book_route_1 = require("../modules/books/book.route");
const category_route_1 = require("../modules/category/category.route");
const order_route_1 = require("../modules/order/order.route");
const profile_route_1 = require("../modules/profile/profile.route");
const user_route_1 = require("../modules/users/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth/signup',
        routes: auth_route_1.authRoutes,
    },
    {
        path: '/auth',
        routes: auth_route_1.authRoutes,
    },
    {
        path: '/users',
        routes: user_route_1.UserRoutes,
    },
    {
        path: '/categories/create-category',
        routes: category_route_1.CategoryRoutes,
    },
    {
        path: '/categories',
        routes: category_route_1.CategoryRoutes,
    },
    {
        path: '/books',
        routes: book_route_1.BookRoutes,
    },
    {
        path: '/orders',
        routes: order_route_1.OrderRoute,
    },
    {
        path: '/profile',
        routes: profile_route_1.ProfileRoute,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
