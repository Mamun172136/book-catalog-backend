"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidation = void 0;
const zod_1 = require("zod");
const isFloat = (value) => Number(value) === value && value % 1 !== 0;
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'title is required',
        }),
        author: zod_1.z.string({
            required_error: 'author is required',
        }),
        genre: zod_1.z.string({
            required_error: 'genre is required',
        }),
        price: zod_1.z
            .number({
            required_error: 'price is required',
        })
            .refine(isFloat, {
            message: 'price must be a floating-point number',
        }),
        publicationDAte: zod_1.z.string({
            required_error: 'publicationDAte is required',
        }),
        categoryId: zod_1.z.string({
            required_error: 'category id is required',
        }),
    }),
});
const bookUpdateValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: 'title is required',
        })
            .optional(),
        author: zod_1.z
            .string({
            required_error: 'author is required',
        })
            .optional(),
        genre: zod_1.z
            .string({
            required_error: 'genre is required',
        })
            .optional(),
        price: zod_1.z
            .number({
            required_error: 'price is required',
        })
            .refine(isFloat, {
            message: 'price must be a floating-point number',
        })
            .optional(),
        publicationDAte: zod_1.z
            .string({
            required_error: 'publicationDAte is required',
        })
            .optional(),
        categoryId: zod_1.z
            .string({
            required_error: 'category id is required',
        })
            .optional(),
    }),
});
const loginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'email is required',
        }),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
    }),
});
exports.bookValidation = {
    create,
    loginZodSchema,
    bookUpdateValidation,
};
