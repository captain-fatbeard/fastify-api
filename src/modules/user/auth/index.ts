import { FastifyInstance } from 'fastify';
import { loginHandler } from './controller';
import { userResponseSchema } from '../schema';
import { loginUserSchema, unauthorizedResponseSchema } from './schema';

const authRoutes = async (fastify: FastifyInstance) => {
    fastify.post(
        '/login',
        {
            schema: {
                body: { loginUserSchema },
                response: {
                    200: userResponseSchema,
                    401: unauthorizedResponseSchema,
                },
            },
        },
        loginHandler,
    );
};

export default authRoutes;
