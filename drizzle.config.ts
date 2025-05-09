import { defineConfig } from 'drizzle-kit';
import env from 'server/env';

export default defineConfig({
  out: './drizzle',
  schema: './src/server/database/schema',
  dialect: 'postgresql',
  dbCredentials: { url: env.POSTGRES_URL },
});
