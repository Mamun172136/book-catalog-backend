"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_validation_1 = require("./book.validation");
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.post('/create-book', (0, validateRequest_1.default)(book_validation_1.bookValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), books_controller_1.BookController.insertIntoDB);
router.get('/', books_controller_1.BookController.getAllBooks);
router.get('/:id', books_controller_1.BookController.getSingleBook);
router.get('/:categoryId/category', books_controller_1.BookController.getSingleBookByCategory);
router.patch('/:id', (0, validateRequest_1.default)(book_validation_1.bookValidation.bookUpdateValidation), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), books_controller_1.BookController.update);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), books_controller_1.BookController.deleteBook);
exports.BookRoutes = router;
