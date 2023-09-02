import { Role } from '@prisma/client';
import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    status: z.enum([...Object.values(Role)] as [string, ...string[]], {}),
    contactNo: z.string({
      required_error: 'contact is required',
    }),
    address: z.string({
      required_error: 'Adress is required',
    }),
    profileImg: z.string({
      required_error: 'profile img is required',
    }),
  }),
});

export const authValidation = {
  create,
};
