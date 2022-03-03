import { FastifyInstance } from 'fastify';

import { createUserHandler } from './controller';

const userRoutes = async (server: FastifyInstance) => {
    server.post('/', createUserHandler);
};

export default userRoutes;
