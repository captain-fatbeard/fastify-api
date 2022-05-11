import prisma from '../../utils/prisma';
import { StoreCampaignInput, UdpateCampaignInput } from './schema';

const campaginQuery = {
    id: true,
    name: true,
    slug: true,
    template_name: true,
    theme: true,
    is_published: true,
    is_template: true,
    from: true,
    to: true,
    client: {
        select: {
            id: true,
            name: true,
        },
    },
};

export const createCampaign = async (input: StoreCampaignInput) => {
    const campaign = await prisma.campaign.create({
        data: {
            ...input,
            client: {
                connect: { id: input.client },
            },
        },
        select: campaginQuery,
    });

    return campaign;
};

export const indexCampaigns = async () => {
    const campaign = await prisma.campaign.findMany({
        select: campaginQuery,
    });

    return campaign;
};

export const showCampaign = async (id: number) => {
    const campaign = await prisma.campaign.findUnique({
        where: { id: Number(id) },
        select: campaginQuery,
    });

    return campaign;
};

export const updateCampaign = async (
    id: number,
    input: UdpateCampaignInput,
) => {
    // const data = input.client
    //     ? {
    //           ...input,
    //           client: {
    //               connect: { id: input.client },
    //           },
    //       }
    //     : input;

    const campaign = await prisma.campaign.update({
        where: { id: Number(id) },
        data: {
            ...input,
        },
        select: campaginQuery,
    });

    return campaign;
};

export const deleteCampaign = async (id: number) => {
    await prisma.campaign.delete({ where: { id: Number(id) } });

    return { message: `campaign ${id} is deleted` };
};
