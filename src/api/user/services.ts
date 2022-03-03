import { hashPassword } from '../../utils/hash';
import prisma from '../../utils/prisma';
import { CreateUserInput } from './schema';

export const createUser = async (input: CreateUserInput) => {
    const { password, ...rest } = input;
    const { hashedPassword } = await hashPassword(password);

    const user = await prisma.user.create({
        data: { ...rest, password: hashedPassword },
    });

    return user;
};
