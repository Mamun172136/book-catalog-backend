/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { authService } from './auth.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.insertIntoDB(req.body);
  const { password, ...others } = result;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' user Created successfully !!',
    data: others,
  });
});
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await authService.loginUser(loginData);
  // const { refreshToken, ...others } = result;

  // // set refresh token into cookie
  // const cookieOptions = {
  //   secure: config.env === 'production',
  //   httpOnly: true,
  // };

  // res.cookie('refreshToken', refreshToken, cookieOptions);

  // sendResponse<ILoginUserResponse>(res, {
  //   statusCode: 200,
  //   success: true,
  //   message: 'User signin successfully!"!',
  //   data: result,
  // });

  res.status(400).json({
    success: true,
    statusCode: 200,
    message: 'User signin successfully!"!',
    token: result.accessToken,
  });
});

export const authController = {
  insertIntoDB,
  loginUser,
};
