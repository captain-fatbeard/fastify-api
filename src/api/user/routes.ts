import { FastifyInstance } from 'fastify';

import { createUserHandler, authUserHandler } from './controller';
import {
    // autheUserResponseSchema,
    // autheUserSchema,
    createUserResponseSchema,
    createUserSchema,
} from './schema';

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

    server.post(
        '/auth',
        // {
        //     schema: {
        //         body: autheUserSchema,
        //         response: {
        //             200: autheUserResponseSchema,
        //         },
        //     },
        // },
        authUserHandler,
    );
};

export default userRoutes;
