import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.ADMIN), CategoryController.insertIntoDB);

router.get('/:id', CategoryController.getSingleCategory);
router.get('/', CategoryController.getCategories);

export const CategoryRoutes = router;
