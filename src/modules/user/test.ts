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

    it('can index users', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/api/users',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ email: 'user1@test.test' }),
                expect.objectContaining({ email: 'user2@test.test' }),
            ]),
        );
    });

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

    it('can show a user', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/api/users/1',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toMatchObject({ email: 'user1@test.test' });
    });

    it('can update a user', async () => {
        const response = await app.inject({
            method: 'PUT',
            url: '/api/users/1',
            payload: {
                password: 'password',
                name: 'udpated name',
            },
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toMatchObject({
            name: 'udpated name',
        });
    });

    it('can delete a user', async () => {
        const response = await app.inject({
            method: 'DELETE',
            url: '/api/users/1',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ message: 'user 1 is deleted' });
    });
});
