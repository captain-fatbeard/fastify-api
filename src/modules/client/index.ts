import { FastifyInstance } from 'fastify';
import {
    createClientHandler,
    indexClientsHandler,
    showClientsHandler,
    updateClientHandler,
    deleteClientHandler,
} from './controller';
import {
    storeClientSchema,
    clientDeletedResponseSchema,
    clientResponseSchema,
} from './schema';

const clientRoutes = async (fastify: FastifyInstance) => {
    fastify.post(
        '/',
        {
            schema: {
                body: { storeClientSchema },
                response: {
                    201: clientResponseSchema,
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
                        items: clientResponseSchema,
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
                    200: clientResponseSchema,
                },
            },
        },
        showClientsHandler,
    );

    fastify.put(
        '/:id',
        {
            schema: {
                body: { storeClientSchema },
                response: {
                    200: clientResponseSchema,
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
                    200: clientDeletedResponseSchema,
                },
            },
        },
        deleteClientHandler,
    );
};

export default clientRoutes;
