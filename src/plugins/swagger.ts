import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import fastifySwagger from 'fastify-swagger';

export default fp(async (server: FastifyInstance) => {
    server.register(fastifySwagger, {
        routePrefix: '/documentation',
        swagger: {
            info: {
                title: 'Fastify API',
                description: '',
                version: '0.1.0',
            },
            host: 'localhost:3000',
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
            // securityDefinitions: {
            //     apiKey: {
            //         type: 'apiKey',
            //         name: 'apiKey',
            //         in: 'header',
            //     },
            // },
        },
        exposeRoute: true,
    });
});
