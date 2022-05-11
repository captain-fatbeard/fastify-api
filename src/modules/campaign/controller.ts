import { FastifyReply, FastifyRequest } from 'fastify';
import { StoreCampaignInput } from './schema';
import {
    createCampaign,
    showCampaign,
    indexCampaigns,
    updateCampaign,
    deleteCampaign,
} from './service';

export const createCampaignHandler = async (
    request: FastifyRequest<{
        Body: StoreCampaignInput;
    }>,
    reply: FastifyReply,
) => {
    try {
        const campaign = await createCampaign(request.body);

        return reply.code(201).send(campaign);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};

export const indexCampaignsHandler = async (
    request: FastifyRequest,
    reply: FastifyReply,
) => {
    try {
        const campaigns = await indexCampaigns();

        return reply.code(200).send(campaigns);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};

export const showCampaignsHandler = async (
    request: FastifyRequest,
    reply: FastifyReply,
) => {
    try {
        const { id }: { id?: number } = request.params;
        const campaign = await showCampaign(id);

        return reply.code(200).send(campaign);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};

export const updateCampaignHandler = async (
    request: FastifyRequest<{
        Body: StoreCampaignInput;
    }>,
    reply: FastifyReply,
) => {
    try {
        const { id }: { id?: number } = request.params;
        const campaign = await updateCampaign(id, request.body);

        return reply.code(200).send(campaign);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};

export const deleteCampaignHandler = async (
    request: FastifyRequest,
    reply: FastifyReply,
) => {
    try {
        const { id }: { id?: number } = request.params;
        const deleted = await deleteCampaign(id);

        return reply.code(200).send(deleted);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};
