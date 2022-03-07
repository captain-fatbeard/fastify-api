import Fastify from 'fastify';

import userRoutes from './modules/user/user.route';

import { userSchemas } from './modules/user/user.schema';

const fastify = Fastify();

fastify.get('/health', async () => {
    return { status: 'ok' };
});

const init = async () => {
    for (const schema of userSchemas) {
        fastify.addSchema(schema);
    }

    fastify.register(userRoutes, { prefix: 'api/users' });

    try {
        await fastify.listen(3000, '0.0.0.0');
        console.log('App: http://localhost:3000');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

init();
