import { Static, Type } from '@sinclair/typebox';

const userDefaults = {
    email: Type.String({ format: 'email' }),
    name: Type.Optional(Type.String()),
    phone: Type.Optional(Type.String()),
    validated: Type.Optional(Type.String()),
    role: Type.Optional(Type.Integer()),
};

export const StoreUserSchema = Type.Object({
    ...userDefaults,
    password: Type.Optional(Type.String()),
    clients: Type.Optional(Type.Array(Type.Number())),
});

export const UserResponseSchema = Type.Object({
    id: Type.Integer(),
    ...userDefaults,
    clients: Type.Optional(
        Type.Array(
            Type.Object({
                id: Type.Integer(),
                name: Type.String(),
            }),
        ),
    ),
});

export const UserDeletedResponseSchema = Type.Object({
    message: Type.Optional(Type.String()),
});

export type StoreUserInput = Static<typeof StoreUserSchema>;
