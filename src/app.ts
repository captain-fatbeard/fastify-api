import Fastify from 'fastify';

import userRoutes from './modules/user';
import healthRoutes from './modules/health';

const fastify = Fastify();

const init = async () => {
    fastify.register(userRoutes, { prefix: 'api/users' });
    fastify.register(healthRoutes, { prefix: 'api/health' });

    try {
        await fastify.listen(3000, '0.0.0.0');
        console.log('App: http://localhost:3000');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

init();
