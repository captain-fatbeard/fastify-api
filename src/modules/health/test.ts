import { FastifyInstance } from 'fastify';
import { createServer } from '../../server';

describe('api/health', () => {
    let app: FastifyInstance;

    beforeAll(async () => {
        app = await createServer();
    });

    afterAll(async () => {
        await app.close();
    });

    it('should return a 200 status code', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/api/health',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ status: 'ok' });
    });
});
