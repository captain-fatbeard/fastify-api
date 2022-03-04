import { hash, compare } from 'bcryptjs';

export const hashPassword = async (password: string) => {
    const hashedPassword = await hash(password, 10);

    return { hashedPassword };
};

export const verifyPassword = async ({
    claim,
    hash = '123',
}: {
    claim: string;
    hash: string;
}) => {
    const match = await compare(claim, hash);

    return match;
};
