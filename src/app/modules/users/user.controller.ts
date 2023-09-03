import { Request, Response } from 'express';
import { UserService } from './user.service';

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.send({
      succes: true,
      message: 'user retrieved successfully!',
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  getUsers,
};
