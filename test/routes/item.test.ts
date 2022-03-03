import { test } from 'tap';
import { build } from '../helper';

test('can list items', async (t) => {
    const app = await build(t);

    const res = await app.inject({
        method: 'get',
        url: '/api/items',
    });
    t.equal(res.statusCode, 200);
});

test('can create items', async (t) => {
    const app = await build(t);

    const res = await app.inject({
        method: 'post',
        url: '/api/items',
    });
    t.equal(res.statusCode, 201);
});
