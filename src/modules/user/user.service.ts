// import { hashPassword } from '../../utils/hash';
import prisma from '../utils/prisma';
import { storeUserInput } from './user.schema';

export const createUser = async (input: storeUserInput) => {
    const user = await prisma.user.create({
        data: input,
    });

    return user;
};

export const indexUsers = async () => {
    const users = await prisma.user.findMany();

    return users;
};

export const showUser = async (id: number) => {
    const user = await prisma.user.findUnique({ where: { id: id } });

    return user;
};

// export const updateUser = async (input: updateUserInput) => {
//     const { password, ...rest } = input;
//     const { hashedPassword } = hashPassword(password);

//     const user = await prisma.user.update({
//         data: { ...rest, password: hashedPassword },
//     });

//     return user;
// };
