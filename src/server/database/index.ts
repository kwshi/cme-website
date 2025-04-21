import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import env from 'server/env';
import * as Schema from './schema';

const neonClient = neon(env.POSTGRES_URL);
export default drizzle({ client: neonClient, schema: Schema });
