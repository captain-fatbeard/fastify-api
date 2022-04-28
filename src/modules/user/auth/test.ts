import { FastifyInstance } from 'fastify';
import { createServer } from '../../../server';

describe('auth endpoint', () => {
    let app: FastifyInstance;

    beforeAll(async () => {
        app = await createServer();
    });

    afterAll(async () => {
        await app.close();
    });

    it('can login user', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/api/users/auth/login',
            payload: {
                email: 'userwithpassword@user.test',
                password: 'password',
            },
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toMatchObject({
            email: 'userwithpassword@user.test',
        });
    });

    it('cannot login user with incorrect credentials', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/api/users/auth/login',
            payload: {
                email: 'userwithpassword@user.test',
                password: 'wrongpassword',
            },
        });
        expect(response.statusCode).toBe(401);
        expect(response.json()).toMatchObject({
            message: 'incorrect credentials',
        });
    });
});
