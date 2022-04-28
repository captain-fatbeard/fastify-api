import { verifyPassword } from '../../../utils/hash';
import prisma from '../../../utils/prisma';
import { loginUserRequest } from './schema';

export const loginUser = async (input: loginUserRequest) => {
    let user = await prisma.user.findUnique({
        where: { email: String(input.email) },
    });

    const verified = verifyPassword({
        claim: input.password,
        hash: user.password,
    });

    if (!verified) return 401;

    user = await prisma.user.update({
        where: { id: Number(user.id) },
        data: { validated: new Date() },
    });

    return user;
};
