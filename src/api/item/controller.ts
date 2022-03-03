import { FastifyReply, FastifyRequest } from 'fastify';

export const indexItems = async (
    req: FastifyRequest,
    res: FastifyReply,
): Promise<FastifyReply> => {
    return res.send({ data: {} });
};

export const createItem = async (
    req: FastifyRequest,
    res: FastifyReply,
): Promise<FastifyReply> => {
    return res.code(201).send({ data: {} });
};

module.exports.autoload = false;
