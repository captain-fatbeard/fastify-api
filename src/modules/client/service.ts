import prisma from '../../utils/prisma';
import { StoreClientInput } from './schema';

export const createClient = async (input: StoreClientInput) => {
    const client = await prisma.client.create({
        data: input,
    });

    return client;
};

export const indexClients = async () => {
    const clients = await prisma.client.findMany({
        select: {
            id: true,
            name: true,
            users: true,
        },
    });

    return clients;
};

export const showClient = async (id: number) => {
    const client = await prisma.client.findUnique({
        where: { id: Number(id) },
        select: {
            id: true,
            name: true,
            users: {
                select: {
                    id: true,
                    email: true,
                },
            },
        },
    });

    return client;
};

export const updateClient = async (id: number, input: StoreClientInput) => {
    const client = await prisma.client.update({
        where: { id: Number(id) },
        data: input,
    });

    return client;
};

export const deleteClient = async (id: number) => {
    // delete all campaigns from client before deleting
    await prisma.campaign.deleteMany({ where: { clientId: Number(id) } });
    await prisma.client.delete({ where: { id: Number(id) } });

    return { message: `client ${id} is deleted` };
};
