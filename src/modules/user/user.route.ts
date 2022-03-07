import { FastifyInstance } from 'fastify';
import { createUserHandler } from './user.controller';

const userRoutes = async (fastify: FastifyInstance) => {
    fastify.post('/', createUserHandler);
};

export default userRoutes;
