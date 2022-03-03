import { Type, Static } from '@sinclair/typebox';

const createUserSchema = Type.Object({
    email: Type.String({
        format: 'email',
    }),
    name: Type.String(),
    password: Type.String(),
});

export type CreateUserInput = Static<typeof createUserSchema>;
