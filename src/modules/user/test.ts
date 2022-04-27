import { FastifyInstance } from 'fastify';
import { createServer } from '../../server';

describe('users endpoint', () => {
    let app: FastifyInstance;

    beforeAll(async () => {
        app = await createServer();
    });

    afterAll(async () => {
        await app.close();
    });

    // it('should return a 200 status code', async () => {
    //     const response = await app.inject({
    //         method: 'GET',
    //         url: '/api/users',
    //     });
    //     expect(response.statusCode).toBe(200);
    //     expect(response.json()).toEqual({ status: 'ok' });
    // });

    it('can post new user', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/api/users',
            payload: {
                email: 'new@user.test',
                name: 'name',
                phone: '12345678',
                role: 1,
            },
        });
        expect(response.statusCode).toBe(201);
        expect(response.json()).toMatchObject({ email: 'new@user.test' });
    });

    // it('should return a 200 status code', async () => {
    //     const response = await app.inject({
    //         method: 'GET',
    //         url: '/api/users/1',
    //     });
    //     expect(response.statusCode).toBe(200);
    //     expect(response.json()).toEqual({ status: 'ok' });
    // });

    // it('should return a 200 status code', async () => {
    //     const response = await app.inject({
    //         method: 'PUT',
    //         url: '/api/users/1',
    //     });
    //     expect(response.statusCode).toBe(200);
    //     expect(response.json()).toEqual({ status: 'ok' });
    // });

    // it('should return a 200 status code', async () => {
    //     const response = await app.inject({
    //         method: 'DELETE',
    //         url: '/api/users/1',
    //     });
    //     expect(response.statusCode).toBe(200);
    //     expect(response.json()).toEqual({ status: 'ok' });
    // });
});
