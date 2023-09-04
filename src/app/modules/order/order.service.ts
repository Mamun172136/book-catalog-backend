import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createOrder = async (data: any): Promise<Order> => {
  //   console.log('from service');
  //   console.log(data);
  const result = await prisma.order.create({
    data,
  });
  return result;
};
const getAllOrders = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany({});
  return result;
};
const getOrderBySepecific = async (
  id: string,
  userId: string,
  role: string
): Promise<Order | null> => {
  const result: Order | null = null;
  if (role == 'admin') {
    console.log('admin');
    const result = await prisma.order.findUnique({
      where: {
        id,
      },
    });
    return result;
  }
  if (role == 'customer') {
    console.log('customer');
    console.log(userId, id);
    const result = await prisma.order.findUnique({
      where: {
        id,
        userId,
      },
    });
    console.log(result);
    return result;
  }

  return result;
};

export const OrderService = {
  createOrder,
  getAllOrders,
  getOrderBySepecific,
};
