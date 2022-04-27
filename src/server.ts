import { fastify } from 'fastify';

import userRoutes from './modules/user';
import healthRoutes from './modules/health';

const app = fastify({
    logger: process.env.LOGGER === 'true' ? true : false,
});

export const createServer = async () => {
    await app.register(healthRoutes, { prefix: '/api/health' });
    await app.register(userRoutes, { prefix: '/api/users' });

    app.setErrorHandler((error, req, res) => {
        req.log.error(error.toString());
        res.send({ error });
    });

    return app;
};
