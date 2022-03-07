// import { hashPassword } from '../../utils/hash';
import prisma from '../utils/prisma';
import { CreateUserInput } from './user.schema';

export const createUser = async (input: CreateUserInput) => {
    const user = await prisma.user.create({
        data: input,
    });

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
