import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (categoryData: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data: categoryData,
  });

  return result;
};

export const CategoryService = {
  insertIntoDB,
  // getAllFromDB,
  // getDataById,
  // updateOneInDB,
  // deleteByIdFromDB
};