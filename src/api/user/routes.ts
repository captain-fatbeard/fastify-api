import { FastifyInstance } from 'fastify';

import { createUserHandler } from './controller';
import { createUserResponseSchema, createUserSchema } from './schema';

const userRoutes = async (server: FastifyInstance) => {
    server.post(
        '/',
        {
            schema: {
                body: createUserSchema,
                response: {
                    201: createUserResponseSchema,
                },
            },
        },
        createUserHandler,
    );
};

export default userRoutes;
