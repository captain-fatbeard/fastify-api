import { FastifyReply, FastifyRequest } from 'fastify';
import { storeUserInput } from './schema';
import {
    createUser,
    showUser,
    indexUsers,
    updateUser,
    deleteUser,
} from './service';

export const createUserHandler = async (
    request: FastifyRequest<{
        Body: storeUserInput;
    }>,
    reply: FastifyReply,
) => {
    try {
        const body = request.body;
        const user = await createUser(body);

        return reply.code(201).send(user);
    } catch (error) {
        return reply.code(500).send(error);
    }
};

export const indexUsersHandler = async (
    request: FastifyRequest,
    reply: FastifyReply,
) => {
    try {
        const users = await indexUsers();

        return reply.code(200).send(users);
    } catch (error) {
        return reply.code(500).send(error);
    }
};

export const showUsersHandler = async (
    request: FastifyRequest,
    reply: FastifyReply,
) => {
    try {
        const { id }: { id?: number } = request.params;
        const user = await showUser(id);

        return reply.code(200).send(user);
    } catch (error) {
        return reply.code(500).send(error);
    }
};

export const updateUserHandler = async (
    request: FastifyRequest<{
        Body: storeUserInput;
    }>,
    reply: FastifyReply,
) => {
    try {
        const { id }: { id?: number } = request.params;
        const user = await updateUser(id, request.body);

        return reply.code(200).send(user);
    } catch (error) {
        return reply.code(500).send(error);
    }
};

export const deleteUserHandler = async (
    request: FastifyRequest,
    reply: FastifyReply,
) => {
    try {
        const { id }: { id?: number } = request.params;
        const deleted = await deleteUser(id);

        return reply.code(200).send(deleted);
    } catch (error) {
        return reply.code(500).send(error);
    }
};
