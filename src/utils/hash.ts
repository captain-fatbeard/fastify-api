import { hashSync, genSaltSync, compareSync } from 'bcryptjs';

export const hashPassword = (password: string): string => {
    return hashSync(password, genSaltSync(8));
};

export const verifyPassword = ({
    claim,
    hash,
}: {
    claim: string;
    hash: string;
}) => {
    return compareSync(claim, hash);
};
