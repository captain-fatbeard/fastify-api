import { FastifyPluginAsync } from 'fastify';

import { isUp } from './controller';

const healthRoutes: FastifyPluginAsync = async (fastify): Promise<void> => {
    fastify.get('/', isUp);
};

export default healthRoutes;
