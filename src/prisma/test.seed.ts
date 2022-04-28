import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../utils/hash';
const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.upsert({
        where: { email: 'user1@test.test' },
        update: {},
        create: {
            email: 'user1@test.test',
            name: 'user 1',
            phone: '12345678',
            role: 1,
        },
    });
    await prisma.user.upsert({
        where: { email: 'user2@test.test' },
        update: {},
        create: {
            email: 'user2@test.test',
            name: 'user 2',
            phone: '12345678',
            role: 1,
        },
    });
    await prisma.user.upsert({
        where: { email: 'userwithpassword@user.test' },
        update: {},
        create: {
            email: 'userwithpassword@user.test',
            name: 'userwithpassword',
            password: hashPassword('password'),
        },
    });
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
