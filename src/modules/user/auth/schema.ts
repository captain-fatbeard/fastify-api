import { Static, Type } from '@sinclair/typebox';

export const loginUserSchema = Type.Object({
    email: Type.String({ format: 'email' }),
    password: Type.Optional(Type.String()),
});

export type loginUserRequest = Static<typeof loginUserSchema>;

export const unauthorizedResponseSchema = Type.Object({
    message: Type.String(),
});
