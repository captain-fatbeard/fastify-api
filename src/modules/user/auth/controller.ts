import { FastifyReply, FastifyRequest } from 'fastify';
import { LoginUserRequest } from './schema';
import { loginUser } from './service';

export const loginHandler = async (
    request: FastifyRequest<{
        Body: LoginUserRequest;
    }>,
    reply: FastifyReply,
) => {
    try {
        const user = await loginUser(request.body);

        if (user === 401) {
            return reply.code(401).send({ message: 'incorrect credentials' });
        }

        return reply.code(200).send(user);
    } catch (error) {
        /* istanbul ignore next */
        return reply.code(500).send(error);
    }
};
