import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { ILoginUser, ILoginUserResponse } from './auth.interface';

const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;
  // creating instance of User
  // const user = new User();
  //  // access to our instance methods
  //   const isUserExist = await user.isUserExist(id);

  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (isUserExist.password && isUserExist.password !== password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  //create access token & refresh token

  const { id: userId, role } = isUserExist;
  // Calculate the expiration time for one year in seconds
  const oneYearInSeconds = 365 * 24 * 60 * 60;

  const accessToken = jwtHelpers.createToken(
    { userId, role, iat: Math.floor(Date.now() / 1000) + oneYearInSeconds },
    'secret',
    '365d'
  );

  //   const refreshToken = jwtHelpers.createToken(
  //     { userId, role },
  //     config.jwt.refresh_secret as Secret,
  //     config.jwt.refresh_expires_in as string
  //   );

  return {
    accessToken,
  };
};

export const authService = {
  insertIntoDB,
  loginUser,
};
