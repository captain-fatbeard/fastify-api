import { createServer } from './server';

const init = async () => {
    const fastify = await createServer();

    try {
        await fastify.listen(process.env.APP_PORT, '0.0.0.0');
        console.log('App: http://localhost:3000');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

    return fastify;
};

init();
