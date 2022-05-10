import { Static, Type } from '@sinclair/typebox';

export const LoginUserSchema = Type.Object({
    email: Type.String({ format: 'email' }),
    password: Type.Optional(Type.String()),
});

export type LoginUserRequest = Static<typeof LoginUserSchema>;

export const UnauthorizedResponseSchema = Type.Object({
    message: Type.String(),
});
