import { FastifyPluginAsync } from 'fastify';

const example: FastifyPluginAsync = async (fastify): Promise<void> => {
    fastify.get('/', async (request, reply) => {
        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ status: 'ok' });
    });
};

export default example;
