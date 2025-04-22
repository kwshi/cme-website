// admin panel authentication stuff
import { pgSchema, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const schema = pgSchema('admin');

// admin users; `password` is argon2-hashed
export const user = schema.table('user', {
  email: text('email').primaryKey(),
  password: text('password').notNull(),
});

// sessions for logging in
export const session = schema.table('session', {
  token: uuid('token').primaryKey().defaultRandom(),
  email: text('email')
    .notNull()
    .references(() => user.email),
  fresh: timestamp({ withTimezone: true }).notNull().defaultNow(),
});
