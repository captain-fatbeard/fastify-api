import { FastifyPluginAsync } from 'fastify';

import { indexItems, createItem } from './controller';

const itemRoutes: FastifyPluginAsync = async (fastify): Promise<void> => {
    fastify.get('/', indexItems);
    fastify.post('/', createItem);
};

export default itemRoutes;
