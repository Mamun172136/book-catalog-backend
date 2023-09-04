import { User } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProfileService } from './profile.service';

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const { userId, role } = req.user as { userId: string; role: string };
  console.log('line 39');
  console.log(req.user);

  const result = await ProfileService.getProfile(userId, role);

  sendResponse<User | User[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user fetched successfully!!',
    data: result,
  });
});

export const ProfileController = {
  getProfile,
};
