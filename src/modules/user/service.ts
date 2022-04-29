import { hashPassword } from '../../utils/hash';
import prisma from '../../utils/prisma';
import { storeUserInput } from './schema';

export const createUser = async (input: storeUserInput) => {
    if (input.password) {
        const hashedPassword = await hashPassword(input.password);
        input = { ...input, password: hashedPassword };
    }

    const user = await prisma.user.create({
        data: input,
    });

    return user;
};

export const indexUsers = async () => {
    const users = await prisma.user.findMany({
        include: { clients: { include: { client: true } } },
    });

    const result = users.map((user) => {
        return {
            ...user,
            clients: user.clients.map((data) => data.client.id),
        };
    });

    return result;
};

export const showUser = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: { clients: { include: { client: true } } },
    });

    const result = {
        ...user,
        clients: user.clients.map((data) => {
            return data.client.id;
        }),
    };

    return result;
};

export const updateUser = async (id: number, input: storeUserInput) => {
    if (input.password) {
        const hashedPassword = await hashPassword(input.password);
        input = { ...input, password: hashedPassword };
    }

    const user = await prisma.user.update({
        where: { id: Number(id) },
        data: input,
    });

    return user;
};

export const deleteUser = async (id: number) => {
    // disconnect all clients from user before deleting
    await prisma.clientUser.deleteMany({ where: { userId: Number(id) } });
    await prisma.user.delete({ where: { id: Number(id) } });

    return { message: `user ${id} is deleted` };
};
