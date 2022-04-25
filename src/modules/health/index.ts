import { FastifyInstance } from 'fastify';

const healthRoutes = async (fastify: FastifyInstance) => {
    fastify.get('/', async () => {
        return { status: 'ok' };
    });
};

export default healthRoutes;
