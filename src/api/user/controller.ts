import { FastifyReply, FastifyRequest } from 'fastify';
import { createUserSchema } from './schema';

import { createUser } from './services';

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
