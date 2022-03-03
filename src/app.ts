import { join } from 'path';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import fastifyBcrypt from 'fastify-bcrypt';
import { FastifyPluginAsync } from 'fastify';

import userRoutes from './api/user/routes';
import healthRoutes from './api/health/routes';
import itemRoutes from './api/item/routes';

export type AppOptions = {
    // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts,
): Promise<void> => {
    // Place here your custom code!
    await fastify.register(fastifyBcrypt);

    await fastify.register(userRoutes, { prefix: '/api/users' });
    await fastify.register(healthRoutes, { prefix: '/api/health' });
    await fastify.register(itemRoutes, { prefix: '/api/items' });

    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'plugins'),
        options: opts,
    });

    // This loads all plugins defined in routes
    // define your routes in one of these
    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'routes'),
        options: opts,
    });
};

export default app;
export { app };
