import { FastifyInstance } from 'fastify';
import {
    createUserHandler,
    indexUsersHandler,
    showUsersHandler,
    updateUserHandler,
    deleteUserHandler,
} from './user.controller';
import {
    storeUserSchema,
    userDeletedResponseSchema,
    userResponseSchema,
} from './user.schema';

const userRoutes = async (fastify: FastifyInstance) => {
    fastify.post(
        '/',
        {
            schema: {
                body: { storeUserSchema },
                response: {
                    201: userResponseSchema,
                },
            },
        },
        createUserHandler,
    );

    fastify.get(
        '/',
        {
            schema: {
                response: {
                    200: {
                        type: 'array',
                        items: userResponseSchema,
                    },
                },
            },
        },
        indexUsersHandler,
    );

    fastify.get(
        '/:id',
        {
            schema: {
                response: {
                    200: userResponseSchema,
                },
            },
        },
        showUsersHandler,
    );

    fastify.put(
        '/:id',
        {
            schema: {
                body: { storeUserSchema },
                response: {
                    200: userResponseSchema,
                },
            },
        },
        updateUserHandler,
    );

    fastify.delete(
        '/:id',
        {
            schema: {
                response: {
                    200: userDeletedResponseSchema,
                },
            },
        },
        deleteUserHandler,
    );
};

export default userRoutes;
