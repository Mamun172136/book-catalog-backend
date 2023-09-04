import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getProfile = async (
  id: string,
  role: string
): Promise<User | User[] | null> => {
  const result: User | null = null;

  if (role == 'admin') {
    console.log('admin');
    const result = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    console.log(result);
    return result;
  }
  if (role == 'customer') {
    console.log('customer');
    console.log(id);
    const result = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    console.log(result);
    return result;
  }

  return result;
};

export const ProfileService = {
  getProfile,
};
