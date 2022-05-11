import { hashPassword } from '../../utils/hash';
import prisma from '../../utils/prisma';
import { StoreUserInput } from './schema';

const selectUserQuery = {
    id: true,
    email: true,
    name: true,
    phone: true,
    validated: true,
    role: true,
    clients: {
        select: {
            id: true,
            name: true,
        },
    },
};

export async function createUser(input: StoreUserInput) {
    if (input.password) {
        const hashedPassword = await hashPassword(input.password);
        input = { ...input, password: hashedPassword };
    }

    const user = await prisma.user.create({
        data: {
            ...input,
            clients: {
                connect: input.clients
                    ? input.clients.map((clientId) => {
                          return { id: clientId };
                      })
                    : [],
            },
        },
        select: {
            id: true,
            email: true,
            name: true,
            phone: true,
            validated: true,
            role: true,
            clients: true,
        },
    });

    return user;
}

export const indexUsers = async () => {
    const users = await prisma.user.findMany({
        select: selectUserQuery,
    });

    return users;
};

export const showUser = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        select: selectUserQuery,
    });

    return user;
};

export const updateUser = async (id: number, input: StoreUserInput) => {
    if (input.password) {
        const hashedPassword = await hashPassword(input.password);
        input = { ...input, password: hashedPassword };
    }

    // disconnect all clients before updating
    if (input.clients) {
        await prisma.user.update({
            where: { id: Number(id) },
            data: {
                clients: {
                    set: [],
                },
            },
        });
    }

    const user = await prisma.user.update({
        where: { id: Number(id) },
        data: {
            ...input,
            clients: {
                connect: input.clients
                    ? input.clients.map((clientId) => {
                          return { id: clientId };
                      })
                    : [],
            },
        },
        select: {
            id: true,
            email: true,
            name: true,
            phone: true,
            validated: true,
            role: true,
            clients: true,
        },
    });

    return user;
};

export const deleteUser = async (id: number) => {
    await prisma.user.delete({ where: { id: Number(id) } });

    return { message: `user ${id} is deleted` };
};
