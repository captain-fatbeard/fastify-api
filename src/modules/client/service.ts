import prisma from '../../utils/prisma';
import { storeClientInput } from './schema';

export const createClient = async (input: storeClientInput) => {
    const client = await prisma.client.create({
        data: input,
    });

    return client;
};

export const indexClients = async () => {
    const clients = await prisma.client.findMany({
        include: { users: { include: { user: true } } },
    });

    const result = clients.map((client) => {
        return {
            ...client,
            users: client.users.map((data) => data.user.id),
        };
    });

    return result;
};

export const showClient = async (id: number) => {
    const client = await prisma.client.findUnique({
        where: { id: Number(id) },
        include: { users: { include: { user: true } } },
    });

    const result = {
        ...client,
        users: client.users.map((data) => {
            return data.user.id;
        }),
    };

    return result;
};

export const updateClient = async (id: number, input: storeClientInput) => {
    const client = await prisma.client.update({
        where: { id: Number(id) },
        data: input,
    });

    return client;
};

export const deleteClient = async (id: number) => {
    // disconnect all users from client before deleting
    await prisma.clientUser.deleteMany({ where: { clientId: Number(id) } });
    await prisma.client.delete({ where: { id: Number(id) } });

    return { message: `client ${id} is deleted` };
};
