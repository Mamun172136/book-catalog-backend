import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (categoryData: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data: categoryData,
  });

  return result;
};

const getCategories = async () => {
  const result = await prisma.category.findMany({
    select: {
      title: true,
    },
  });

  return result;
};

export const CategoryService = {
  insertIntoDB,
  getCategories,
  // getDataById,
  // updateOneInDB,
  // deleteByIdFromDB
};
