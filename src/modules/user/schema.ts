import { Static, Type } from '@sinclair/typebox';

const userSchemaPart = {
    name: Type.Optional(Type.String()),
    phone: Type.Optional(Type.String()),
    validated: Type.Optional(Type.String()),
    role: Type.Optional(Type.Integer()),
};

export const StoreUserSchema = Type.Object({
    email: Type.String({ format: 'email' }),
    ...userSchemaPart,
    password: Type.Optional(Type.String()),
    clients: Type.Optional(Type.Array(Type.Number())),
});

export const UpdateUserSchema = Type.Object({
    email: Type.Optional(Type.String({ format: 'email' })),
    ...userSchemaPart,
    password: Type.Optional(Type.String()),
    clients: Type.Optional(Type.Array(Type.Number())),
});

export const UserResponseSchema = Type.Object({
    id: Type.Integer(),
    email: Type.String({ format: 'email' }),
    ...userSchemaPart,
    clients: Type.Array(Type.Any()),
});

export const UserDeletedResponseSchema = Type.Object({
    message: Type.Optional(Type.String()),
});

export type StoreUserInput = Static<typeof StoreUserSchema>;
export type UpdateUserInput = Static<typeof UpdateUserSchema>;
