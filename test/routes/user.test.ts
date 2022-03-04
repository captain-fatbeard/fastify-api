import { test } from 'tap';
import { build } from '../helper';
import { faker } from '@faker-js/faker';

// test('can list users', async (t) => {
//     const app = await build(t);

//     const res = await app.inject({
//         method: 'get',
//         url: '/api/users',
//     });
//     t.equal(res.statusCode, 200);
// });

test('can create user', async (t) => {
    const app = await build(t);

    const res = await app.inject({
        method: 'post',
        url: '/api/users',
        payload: {
            email: faker.internet.email(),
            name: faker.name.firstName(),
            password: faker.internet.password(),
            phone: '12345678',
            role: 3,
        },
    });
    t.equal(res.statusCode, 201);
});
