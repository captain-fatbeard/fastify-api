import { FastifyInstance } from 'fastify';
import {
    createCampaignHandler,
    indexCampaignsHandler,
    showCampaignsHandler,
    updateCampaignHandler,
    deleteCampaignHandler,
} from './controller';
import {
    StoreCampaignSchema,
    CampaignDeletedResponseSchema,
    CampaignResponseSchema,
} from './schema';

const campaignRoutes = async (fastify: FastifyInstance) => {
    fastify.post(
        '/',
        {
            schema: {
                body: { StoreCampaignSchema },
                response: {
                    201: CampaignResponseSchema,
                },
            },
        },
        createCampaignHandler,
    );

    fastify.get(
        '/',
        {
            schema: {
                response: {
                    200: {
                        type: 'array',
                        items: CampaignResponseSchema,
                    },
                },
            },
        },
        indexCampaignsHandler,
    );

    fastify.get(
        '/:id',
        {
            schema: {
                response: {
                    200: CampaignResponseSchema,
                },
            },
        },
        showCampaignsHandler,
    );

    fastify.put(
        '/:id',
        {
            schema: {
                body: { StoreCampaignSchema },
                response: {
                    200: CampaignResponseSchema,
                },
            },
        },
        updateCampaignHandler,
    );

    fastify.delete(
        '/:id',
        {
            schema: {
                response: {
                    200: CampaignDeletedResponseSchema,
                },
            },
        },
        deleteCampaignHandler,
    );
};

export default campaignRoutes;
