const createOrder = async (data: any): Promise<any> => {
  console.log('from service');
  console.log(data);
  //   const result = await prisma.order.create({
  //     data,
  //   });
  //   return result;
};

export const OrderService = {
  createOrder,
};
