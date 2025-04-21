import * as Z from 'zod';

const Env = Z.object({
  POSTGRES_URL: Z.string({ required_error: 'missing POSTGRES_URL' }).url(),
  SESSION_SECRET: Z.string({
    required_error: 'missing SESSION_SECRET',
  })
    .base64()
    .transform((s) => new TextEncoder().encode(s)),
});

export default Env.parse(process.env);
