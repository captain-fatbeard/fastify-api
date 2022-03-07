import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserInput } from './user.schema';
import { createUser } from './user.service';

export const createUserHandler = async (
    request: FastifyRequest<{
        Body: CreateUserInput;
    }>,
    reply: FastifyReply,
) => {
    const body = request.body;

    try {
        const user = await createUser(body);

        return reply.code(201).send(user);
    } catch (error) {
        return reply.code(500).send(error);
    }
};
