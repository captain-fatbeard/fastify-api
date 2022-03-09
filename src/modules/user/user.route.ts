import { FastifyInstance } from 'fastify';
import {
    createUserHandler,
    indexUsersHandler,
    showUsersHandler,
} from './user.controller';
import { storeUserSchema, userResponseSchema } from './user.schema';

const userRoutes = async (fastify: FastifyInstance) => {
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
};

export default userRoutes;
