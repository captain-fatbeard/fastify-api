import { Static, Type } from '@sinclair/typebox';

export const StoreClientSchema = Type.Object({
    name: Type.String(),
    users: Type.Optional(Type.Array(Type.Number())),
});

export const ClientResponseSchema = Type.Object({
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

export const ClientDeletedResponseSchema = Type.Object({
    message: Type.Optional(Type.String()),
});

export type StoreClientInput = Static<typeof StoreClientSchema>;
