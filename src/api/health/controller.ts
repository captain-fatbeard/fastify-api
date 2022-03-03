import { FastifyReply, FastifyRequest } from 'fastify';

export const isUp = async (
    req: FastifyRequest,
    res: FastifyReply,
): Promise<FastifyReply> => {
    return res.send({ status: 'ok' });
};

module.exports.autoload = false;
