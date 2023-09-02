import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (academicSemesterData: User): Promise<User> => {
  const result = await prisma.user.create({
    data: academicSemesterData,
  });

  return result;
};

export const authService = {
  insertIntoDB,
};
