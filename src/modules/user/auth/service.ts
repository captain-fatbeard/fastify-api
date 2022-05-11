import { verifyPassword } from '../../../utils/hash';
import prisma from '../../../utils/prisma';
import { selectUserQuery } from '../service';
import { LoginUserRequest } from './schema';

export const loginUser = async (input: LoginUserRequest) => {
    const foundUser = await prisma.user.findUnique({
        where: { email: String(input.email) },
        select: {
            id: true,
            password: true,
        },
    });

    const verified = verifyPassword({
        claim: input.password,
        hash: foundUser.password,
    });

    if (!verified) return 401;

    const user = await prisma.user.update({
        where: { id: Number(foundUser.id) },
        data: { validated: new Date() },
        select: selectUserQuery,
    });

    return user;
};
