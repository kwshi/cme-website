import 'server-only';
import * as Argon2 from 'argon2';
import { lt, sql } from 'drizzle-orm';
import { SignJWT, jwtVerify } from 'jose';
import * as Z from 'zod';
import * as Zfd from 'zod-form-data';

import { cookies } from 'next/headers';

import database from 'server/database';
import * as Schema from 'server/database/schema';
import env from 'server/env';

const SESSION_COOKIE_NAME = 'cme-session';

const JwtPayload = Z.object({
  email: Z.string().email(),
  token: Z.string().uuid(),
});

const LoginData = Zfd.formData({
  email: Z.string().email(),
  password: Z.string().nonempty(),
});

export const check = async () => {
  // TODO: add flag to optionally update/refresh session expiry. also, consider moving this to middleware, which is considered not great but maybe necessary given nextjs app router's total lack of support for setting cookies in server components, because streaming or some shit… <https://github.com/vercel/next.js/discussions/49843>

  const cookieStore = await cookies();
  const cookie = cookieStore.get(SESSION_COOKIE_NAME);

  if (!cookie) return null;

  const { payload } = await jwtVerify(cookie.value, env.SESSION_SECRET, {
    algorithms: ['HS384'],
  });
  const result = JwtPayload.safeParse(payload);
  if (!result.success) return null;

  const session = await database.query.session.findFirst({
    where: (t, r) =>
      r.and(
        r.eq(t.token, result.data.token),
        r.eq(t.email, result.data.email),
        r.gt(t.fresh, sql`now() - INTERVAL '7 days'`),
      ),
  });
  if (!session) return null;

  return result.data;
};

export const login = async (formData: FormData) => {
  'use server';
  const cookieStore = await cookies();

  const result = LoginData.safeParse(formData);
  if (!result.success) {
    return;
  }

  const entry = await database.query.admin.findFirst({
    where: (a, r) => r.eq(a.email, result.data.email),
    columns: { password: true },
  });
  if (!entry) return;

  const ok = await Argon2.verify(entry.password, result.data.password);
  if (!ok) return;

  const [insert] = await database
    .insert(Schema.session)
    .values({ email: result.data.email })
    .returning({ token: Schema.session.token });

  const token = await new SignJWT({
    email: result.data.email,
    token: insert.token,
  } satisfies Z.TypeOf<typeof JwtPayload>)
    .setProtectedHeader({ alg: 'HS384' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(env.SESSION_SECRET);
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  });
};

export const clean = () =>
  database
    .delete(Schema.session)
    .where(lt(Schema.session.fresh, sql`now() - INTERVAL '7 days'`));
