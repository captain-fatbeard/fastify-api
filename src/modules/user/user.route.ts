import { FastifyInstance } from 'fastify';
import { createUser } from './user.controller';

const userRoutes = async (fastify: FastifyInstance) => {
    fastify.post('/', createUser);
};

export default userRoutes;
