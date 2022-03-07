import { hash, compare } from 'bcryptjs';

export const hashPassword = (password: string) => {
    return hash(password);
};

export const verifyPassword = ({
    claim,
    hash,
}: {
    claim: string;
    hash: string;
}) => {
    return compare(claim, hash);
};
