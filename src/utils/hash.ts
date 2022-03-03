import { hash } from 'bcryptjs';

export const hashPassword = async (password: string) => {
    const hashedPassword = await hash(password, 10);

    return { hashedPassword };
};

export const verifyPassword = ({
    claim,
    hash,
}: {
    claim: string;
    hash: string;
}) => {
    // const hash = await fp.bcrypt.compare(claim, hash);
    const match = claim + hash;

    return match;
};
