import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { bookValidation } from './book.validation';
import { BookController } from './books.controller';

const router = express.Router();

router.post(
  '/create-book',
  validateRequest(bookValidation.create),
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.insertIntoDB
);

router.get(
  '/',

  BookController.getAllBooks
);

router.get(
  '/:id',

  BookController.getSingleBook
);
router.get(
  '/:categoryId/category',

  BookController.getSingleBookByCategory
);
router.patch(
  '/:id',
  validateRequest(bookValidation.bookUpdateValidation),
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.update
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBook);

export const BookRoutes = router;
