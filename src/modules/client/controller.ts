import { FastifyReply, FastifyRequest } from 'fastify';
import { storeClientInput } from './schema';
import {
    createClient,
    showClient,
    indexClients,
    updateClient,
    deleteClient,
} from './service';

export const createClientHandler = async (
    request: FastifyRequest<{
        Body: storeClientInput;
    }>,
    reply: FastifyReply,
) => {
    try {
        const Client = await createClient(request.body);

        return reply.code(201).send(Client);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};

export const indexClientsHandler = async (
    request: FastifyRequest,
    reply: FastifyReply,
) => {
    try {
        const clients = await indexClients();

        return reply.code(200).send(clients);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};

export const showClientsHandler = async (
    request: FastifyRequest,
    reply: FastifyReply,
) => {
    try {
        const { id }: { id?: number } = request.params;
        const client = await showClient(id);

        return reply.code(200).send(client);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};

export const updateClientHandler = async (
    request: FastifyRequest<{
        Body: storeClientInput;
    }>,
    reply: FastifyReply,
) => {
    try {
        const { id }: { id?: number } = request.params;
        const client = await updateClient(id, request.body);

        return reply.code(200).send(client);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};

export const deleteClientHandler = async (
    request: FastifyRequest,
    reply: FastifyReply,
) => {
    try {
        const { id }: { id?: number } = request.params;
        const deleted = await deleteClient(id);

        return reply.code(200).send(deleted);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};
