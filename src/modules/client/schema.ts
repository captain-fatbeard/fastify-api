import { Static, Type } from '@sinclair/typebox';

export const storeClientSchema = Type.Object({
    name: Type.String(),
});

export const clientResponseSchema = Type.Object({
    id: Type.Integer(),
    name: Type.String(),
});

export const clientDeletedResponseSchema = Type.Object({
    message: Type.Optional(Type.String()),
});

export type storeClientInput = Static<typeof storeClientSchema>;
