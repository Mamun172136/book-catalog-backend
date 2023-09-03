import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getUsers = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });

  return result;
};

const getSingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const update = async (id: string, payload: Partial<User>): Promise<any> => {
  const isExist = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (isExist) {
    const result = await prisma.user.update({
      where: {
        id,
      },
      data: payload,
    });

    return result;
  }
};

const deleteByIdFromDB = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const UserService = {
  getUsers,
  getSingleUser,
  update,
  deleteByIdFromDB,
};
