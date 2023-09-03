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

const getSingleCategory = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const update = async (id: string, payload: Partial<Category>): Promise<any> => {
  const isExist = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (isExist) {
    const result = await prisma.category.update({
      where: {
        id,
      },
      data: payload,
    });

    return result;
  }
};

export const CategoryService = {
  insertIntoDB,
  getCategories,
  getSingleCategory,
  update,
  // updateOneInDB,
  // deleteByIdFromDB
};
