import { FastifyInstance } from 'fastify';
import { createUserHandler } from './user.controller';
import { $ref } from './user.schema';

const userRoutes = async (fastify: FastifyInstance) => {
    fastify.post(
        '/',
        {
            schema: { body: $ref('createUserSchema') },
            response: {
                201: $ref('createUserResponseSchema'),
            },
        },
        createUserHandler,
    );
};

export default userRoutes;
