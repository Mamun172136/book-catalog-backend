import { Book } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (bookData: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data: bookData,
  });

  return result;
};
const getSigleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const update = async (id: string, payload: Partial<Book>): Promise<any> => {
  const isExist = await prisma.book.findUnique({
    where: {
      id,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }

  if (isExist) {
    const result = await prisma.book.update({
      where: {
        id,
      },
      data: payload,
    });

    return result;
  }
};

const deleteBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BookService = {
  insertIntoDB,
  getSigleBook,
  deleteBook,
  update,
};
