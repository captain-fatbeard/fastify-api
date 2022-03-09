import { Static, Type } from '@sinclair/typebox';

const userDefaults = {
    email: Type.String({ format: 'email' }),
    name: Type.Optional(Type.String()),
    firstname: Type.Optional(Type.String()),
    lastname: Type.Optional(Type.String()),
    phone: Type.Optional(Type.String()),
    validated: Type.Optional(Type.String()),
    role: Type.Optional(Type.Integer()),
};

export const storeUserSchema = Type.Object({
    ...userDefaults,
    password: Type.Optional(Type.String()),
});

export const userResponseSchema = Type.Object({
    id: Type.Integer(),
    ...userDefaults,
});

export const userDeletedResponseSchema = Type.Object({
    message: Type.Optional(Type.String()),
});

export type storeUserInput = Static<typeof storeUserSchema>;
