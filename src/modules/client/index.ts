import { FastifyInstance } from 'fastify';
import {
    createClientHandler,
    indexClientsHandler,
    showClientsHandler,
    updateClientHandler,
    deleteClientHandler,
} from './controller';
import {
    StoreClientSchema,
    ClientDeletedResponseSchema,
    ClientResponseSchema,
} from './schema';

const clientRoutes = async (fastify: FastifyInstance) => {
    fastify.post(
        '/',
        {
            schema: {
                body: { StoreClientSchema },
                response: {
                    201: ClientResponseSchema,
                },
            },
        },
        createClientHandler,
    );

    fastify.get(
        '/',
        {
            schema: {
                response: {
                    200: {
                        type: 'array',
                        items: ClientResponseSchema,
                    },
                },
            },
        },
        indexClientsHandler,
    );

    fastify.get(
        '/:id',
        {
            schema: {
                response: {
                    200: ClientResponseSchema,
                },
            },
        },
        showClientsHandler,
    );

    fastify.put(
        '/:id',
        {
            schema: {
                body: { StoreClientSchema },
                response: {
                    200: ClientResponseSchema,
                },
            },
        },
        updateClientHandler,
    );

    fastify.delete(
        '/:id',
        {
            schema: {
                response: {
                    200: ClientDeletedResponseSchema,
                },
            },
        },
        deleteClientHandler,
    );
};

export default clientRoutes;
