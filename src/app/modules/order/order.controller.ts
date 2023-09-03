import { Order } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  //   console.log(req.body);
  //   console.log(req.user);
  const { userId } = req.user as { userId: string };
  const { ...data } = req.body;

  data.userId = userId;

  const result = await OrderService.createOrder(data);

  sendResponse<Order>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'order Created successfully!!',
    data: result,
  });
});

export const OrderController = {
  insertIntoDB,
};
