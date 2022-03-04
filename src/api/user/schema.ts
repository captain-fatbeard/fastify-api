import { Type, Static } from '@sinclair/typebox';

const userSchema = {
    email: Type.String({ format: 'email' }),
    name: Type.String(),
    phone: Type.String(),
    role: Type.Number(),
};

export const createUserSchema = Type.Object({
    ...userSchema,
    password: Type.String(),
});

export const createUserResponseSchema = Type.Object({
    id: Type.Number(),
    ...userSchema,
    validated: Type.String({ format: 'date-time' }),
    created_at: Type.String({ format: 'date-time' }),
    updated_at: Type.String({ format: 'date-time' }),
});

export type createUserSchema = Static<typeof createUserSchema>;
export type createUserResponseSchema = Static<typeof createUserResponseSchema>;
