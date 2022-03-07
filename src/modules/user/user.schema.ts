import { z } from 'zod';

const createUserSchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
            invalid_type_error: 'Email must be a string',
        })
        .email(),
    password: z.string(),
    name: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    phone: z.string(),
    validated: z.string(),
    role: z.number(),
});

export default createUserSchema;
