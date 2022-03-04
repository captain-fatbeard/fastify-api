import { hashPassword } from '../../utils/hash';
import prisma from '../../utils/prisma';
import { createUserSchema } from './schema';

export const createUser = async (input: createUserSchema) => {
    const { password, ...rest } = input;
    const { hashedPassword } = await hashPassword(password);

    const user = await prisma.user.create({
        data: { ...rest, password: hashedPassword },
    });

    return user;
};

export const findUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    return user;
};
