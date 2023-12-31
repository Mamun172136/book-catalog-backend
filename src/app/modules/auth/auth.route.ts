import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { authController } from './auth.controller';

import { authValidation } from './auth.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(authValidation.create),
  authController.insertIntoDB
);
router.post(
  '/signin',
  validateRequest(authValidation.loginZodSchema),
  authController.loginUser
);

export const authRoutes = router;
