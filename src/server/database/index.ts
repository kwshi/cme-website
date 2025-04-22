import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import env from 'server/env';
import * as Schema from './schema';

const prefixKeys = <
  const P extends string,
  const T extends Record<string, unknown>,
>(
  p: P,
  obj: T,
) => {
  const prefixed: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj))
    prefixed[`${p}${k[0].toUpperCase()}${k.slice(1)}`] = v;
  return prefixed as {
    [K in keyof T & string as `${P}${Capitalize<K>}`]: T[K];
  };
};

const neonClient = neon(env.POSTGRES_URL);
export default drizzle({
  client: neonClient,
  schema: {
    ...prefixKeys('admin', Schema.Admin),
    ...prefixKeys('content', Schema.Content),
  },
});
