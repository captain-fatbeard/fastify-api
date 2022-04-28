import { FastifyInstance } from 'fastify';
import { createServer } from '../../server';

describe('clients endpoint', () => {
    let app: FastifyInstance;

    beforeAll(async () => {
        app = await createServer();
    });

    afterAll(async () => {
        await app.close();
    });

    it('can index clients', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/api/clients',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: 'client_1' }),
            ]),
        );
    });

    it('can post new client', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/api/clients',
            payload: {
                name: 'new client',
            },
        });
        expect(response.statusCode).toBe(201);
        expect(response.json()).toMatchObject({ name: 'new client' });
    });

    it('can show a client', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/api/clients/1',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toMatchObject({ name: 'client_1' });
    });

    it('can update a client', async () => {
        const response = await app.inject({
            method: 'PUT',
            url: '/api/clients/1',
            payload: {
                name: 'updated client name',
            },
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toMatchObject({
            name: 'updated client name',
        });
    });

    it('can delete a client', async () => {
        const response = await app.inject({
            method: 'DELETE',
            url: '/api/clients/1',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ message: 'client 1 is deleted' });
    });
});
