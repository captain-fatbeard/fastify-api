import { Type, Static } from '@sinclair/typebox';

const userDefaults = {
    email: Type.String({
        format: 'email',
    }),
    name: Type.String(),
    phone: Type.String(),
    role: Type.Number(),
    validated: Type.String(),
};

const createUserSchema = Type.Object({
    ...userDefaults,
    password: Type.String(),
});

// const createUserResponseSchema = Type.Object({
//     id: Type.Number(),
//     ...userDefaults,
// });

export type CreateUserInput = Static<typeof createUserSchema>;
