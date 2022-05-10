import { FastifyInstance } from 'fastify';
import { loginHandler } from './controller';
import { UserResponseSchema } from '../schema';
import { LoginUserSchema, UnauthorizedResponseSchema } from './schema';

const authRoutes = async (fastify: FastifyInstance) => {
    fastify.post(
        '/login',
        {
            schema: {
                body: { LoginUserSchema },
                response: {
                    200: UserResponseSchema,
                    401: UnauthorizedResponseSchema,
                },
            },
        },
        loginHandler,
    );
};

export default authRoutes;
