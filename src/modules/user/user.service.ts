import prisma from '../utils/prisma';

export const createUser = async (input) => {
    const user = await prisma.user.create({ data: input });

    return user;
};
