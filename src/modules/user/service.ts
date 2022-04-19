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
    const users = await prisma.user.findMany();

    return users;
};

export const showUser = async (id: number) => {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });

    return user;
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
    await prisma.user.delete({ where: { id: Number(id) } });

    return { message: `user ${id} is deleted` };
};
