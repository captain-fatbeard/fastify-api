import { fastify } from 'fastify';

import userRoutes from './modules/user';
import healthRoutes from './modules/health';
import authRoutes from './modules/user/auth';
import clientRoutes from './modules/client';
import campaignRoutes from './modules/campaign';

const app = fastify({
    logger: process.env.LOGGER === 'true' ? true : false,
});

export const createServer = async () => {
    await app.register(healthRoutes, { prefix: '/api/health' });
    await app.register(clientRoutes, { prefix: '/api/clients' });
    await app.register(userRoutes, { prefix: '/api/users' });
    await app.register(authRoutes, { prefix: '/api/users/auth' });
    await app.register(campaignRoutes, { prefix: '/api/campaigns' });

    app.setErrorHandler((error, req, res) => {
        /* istanbul ignore next */
        req.log.error(error.toString());
        /* istanbul ignore next */
        res.send({ error });
    });

    return app;
};
