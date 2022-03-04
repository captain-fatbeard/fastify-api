import { FastifyReply, FastifyRequest } from 'fastify';
// import { verifyPassword } from '../../utils/hash';
import { autheUserSchema, createUserSchema } from './schema';

import { createUser, findUserByEmail } from './services';

export const createUserHandler = async (
    req: FastifyRequest<{
        Body: createUserSchema;
    }>,
    res: FastifyReply,
) => {
    const body = req.body;

    try {
        const user = await createUser(body);

        return res.code(201).send(user);
    } catch (error) {
        console.log(error);

        return res.code(500);
    }
};

export const authUserHandler = async (
    req: FastifyRequest<{
        Body: autheUserSchema;
    }>,
    res: FastifyReply,
) => {
    const body = req.body;

    try {
        const user = await findUserByEmail(body.email);

        if (!user) {
            return res.code(401).send({ message: 'Invalid email or password' });
        }

        // const verified = await verifyPassword({
        //     claim: body.password,
        //     hash: user.password ? user.password : '123',
        // });

        // if (verified) {
        //     // const { password, ...rest } = user;
        //     const { ...rest } = user;

        //     return { token: fastify.jwt.sign(rest) };
        // }

        return res.code(401).send({ message: 'Invalid email or password' });
    } catch (error) {
        console.log(error);

        return res.code(500);
    }
};
