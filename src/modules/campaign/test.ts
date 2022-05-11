import { FastifyInstance } from 'fastify';
import { createServer } from '../../server';

describe('campaigns endpoint', () => {
    let app: FastifyInstance;

    beforeAll(async () => {
        app = await createServer();
    });

    afterAll(async () => {
        await app.close();
    });

    it('can index campaigns', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/api/campaigns',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: 'campaign_1' }),
                expect.objectContaining({ name: 'campaign_2' }),
            ]),
        );
    });

    it('can post new campaign', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/api/campaigns',
            payload: {
                name: 'new campaign',
                slug: 'campaign_slug',
                client: 1,
            },
        });

        expect(response.statusCode).toBe(201);
        expect(response.json()).toMatchObject({ name: 'new campaign' });
    });

    it('can show a campaign', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/api/campaigns/1',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toMatchObject({ name: 'campaign_1' });
    });

    it('can update a campaign', async () => {
        const response = await app.inject({
            method: 'PUT',
            url: '/api/campaigns/1',
            payload: {
                name: 'udpated name',
            },
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toMatchObject({
            name: 'udpated name',
        });
    });

    it('can delete a campaign', async () => {
        const response = await app.inject({
            method: 'DELETE',
            url: '/api/campaigns/1',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ message: 'campaign 1 is deleted' });
    });
});
