import prisma from '../../utils/prisma';
import { storeClientInput } from './schema';

export const createClient = async (input: storeClientInput) => {
    const client = await prisma.client.create({
        data: input,
    });

    return client;
};

export const indexClients = async () => {
    const clients = await prisma.client.findMany();

    return clients;
};

export const showClient = async (id: number) => {
    const client = await prisma.client.findUnique({
        where: { id: Number(id) },
    });

    return client;
};

export const updateClient = async (id: number, input: storeClientInput) => {
    const client = await prisma.client.update({
        where: { id: Number(id) },
        data: input,
    });

    return client;
};

export const deleteClient = async (id: number) => {
    await prisma.client.delete({ where: { id: Number(id) } });

    return { message: `client ${id} is deleted` };
};
