import { FastifyPluginAsync } from 'fastify';

import { isUp } from './controller';

const healthRoutes: FastifyPluginAsync = async (fastify): Promise<void> => {
    fastify.get(
        '/',
        {
            schema: {
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            status: { type: 'string' },
                            timestamp: { type: 'string', format: 'date-time' },
                        },
                    },
                },
            },
        },
        isUp,
    );
};

export default healthRoutes;
