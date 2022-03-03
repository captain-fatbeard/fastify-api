const fp = require('fastify-plugin');

export const hashPassword = (password: string) => {
    // const hash = await fp.bcrypt.hash(password);
    // const hash = await fp.bcryptHash(password);
    // console.log(typeof hash);
    // console.log('hash', hash)
    const hash = password;

    return { hash };
};

export const verifyPassword = async ({
    claim,
    hash,
}: {
    claim: string;
    hash: string;
}) => {
    // const hash = await fp.bcrypt.compare(claim, hash);
    const match = await fp.bcryptCompare(claim, hash);

    return match;
};
