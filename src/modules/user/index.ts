import { FastifyInstance } from 'fastify';
import {
    createUserHandler,
    indexUsersHandler,
    showUsersHandler,
    updateUserHandler,
    deleteUserHandler,
} from './controller';
import {
    StoreUserSchema,
    UserDeletedResponseSchema,
    UserResponseSchema,
} from './schema';

const userRoutes = async (fastify: FastifyInstance) => {
    fastify.post(
        '/',
        {
            schema: {
                body: { StoreUserSchema },
                response: {
                    201: UserResponseSchema,
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
                        items: UserResponseSchema,
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
                    200: UserResponseSchema,
                },
            },
        },
        showUsersHandler,
    );

    fastify.put(
        '/:id',
        {
            schema: {
                body: { StoreUserSchema },
                response: {
                    200: UserResponseSchema,
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
                    200: UserDeletedResponseSchema,
                },
            },
        },
        deleteUserHandler,
    );
};

export default userRoutes;
