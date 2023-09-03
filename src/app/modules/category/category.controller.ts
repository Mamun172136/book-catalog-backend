import { Category } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.insertIntoDB(req.body);
  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'category Created successfully!!',
    data: result,
  });
});

const getCategories = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.getCategories();
    res.send({
      succes: true,
      message: 'category retrieved successfully!',
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getSingleCategory(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' category fetched successfully !!',
    data: result,
  });
});

export const CategoryController = {
  insertIntoDB,
  getCategories,
  getSingleCategory,
};
