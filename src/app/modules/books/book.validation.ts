import { z } from 'zod';
const isFloat = (value: any) => Number(value) === value && value % 1 !== 0;
const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    author: z.string({
      required_error: 'author is required',
    }),
    genre: z.string({
      required_error: 'genre is required',
    }),
    price: z
      .number({
        required_error: 'price is required',
      })
      .refine(isFloat, {
        message: 'price must be a floating-point number',
      }),
    publicationDAte: z.string({
      required_error: 'publicationDAte is required',
    }),
    categoryId: z.string({
      required_error: 'category id is required',
    }),
  }),
});
const bookUpdateValidation = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'title is required',
      })
      .optional(),
    author: z
      .string({
        required_error: 'author is required',
      })
      .optional(),
    genre: z
      .string({
        required_error: 'genre is required',
      })
      .optional(),
    price: z
      .number({
        required_error: 'price is required',
      })
      .refine(isFloat, {
        message: 'price must be a floating-point number',
      })
      .optional(),
    publicationDAte: z
      .string({
        required_error: 'publicationDAte is required',
      })
      .optional(),
    categoryId: z
      .string({
        required_error: 'category id is required',
      })
      .optional(),
  }),
});

const loginZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

export const bookValidation = {
  create,
  loginZodSchema,
  bookUpdateValidation,
};
