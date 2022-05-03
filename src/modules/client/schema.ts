import { Static, Type } from '@sinclair/typebox';

export const storeClientSchema = Type.Object({
    name: Type.String(),
    users: Type.Optional(Type.Array(Type.Number())),
});

export const clientResponseSchema = Type.Object({
    id: Type.Integer(),
    name: Type.String(),
    users: Type.Optional(
        Type.Array(
            Type.Object({
                id: Type.Integer(),
                email: Type.String({ format: 'email' }),
            }),
        ),
    ),
});

export const clientDeletedResponseSchema = Type.Object({
    message: Type.Optional(Type.String()),
});

export type storeClientInput = Static<typeof storeClientSchema>;
