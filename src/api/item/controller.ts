import { FastifyReply, FastifyRequest } from 'fastify';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const indexItems = async (
    req: FastifyRequest,
    res: FastifyReply,
): Promise<FastifyReply> => {
    const allItems = await prisma.item.findMany();
    console.log(allItems);

    return res.send({ data: allItems });
};

export const createItem = async (
    req: FastifyRequest,
    res: FastifyReply,
): Promise<FastifyReply> => {
    const newItem = await prisma.item.create({
        data: {
            name: 'Alice',
        },
    });

    return res.code(201).send({ data: newItem });
};

module.exports.autoload = false;
