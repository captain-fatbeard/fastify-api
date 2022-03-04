import { FastifyReply, FastifyRequest } from 'fastify';

export const isUp = async (
    req: FastifyRequest,
    res: FastifyReply,
): Promise<FastifyReply> => {
    return res.send({ status: 'ok', timestamp: new Date().toISOString() });
};

module.exports.autoload = false;
