import request from 'supertest';
import type { ApolloServer, BaseContext } from '@apollo/server';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { createServer } from '../src/server';

let api: request.SuperTest<request.Test>,
  server: ApolloServer<BaseContext>,
  url: string;

describe('sample test', () => {
  beforeEach(async () => {
    ({ server, url } = await createServer());

    api = request(url);
  });

  afterEach(async () => await server?.stop());

  it('should get the test user', async () => {
    const id = '1';

    const queryData = {
      query: `query getUser($id: ID!) {
        getUser(id: $id){
          data {
            ...on User {
              id name
            }
          }, success
        }
      }`,
      variables: { id }
    };

    const {
      body: {
        data: { getUser }
      }
    } = await api.post('/').send(queryData);

    expect(getUser.success).toBe(true);
    expect(getUser.data).toEqual({ id, name: 'Test User' });
  });
});
