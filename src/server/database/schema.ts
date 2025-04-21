import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const admin = pgTable('admin', {
  email: text('email').primaryKey(),
  password: text('password').notNull(),
});

export const session = pgTable('session', {
  token: uuid('token').primaryKey().defaultRandom(),
  email: text('email')
    .notNull()
    .references(() => admin.email),
  fresh: timestamp({ withTimezone: true }).notNull().defaultNow(),
});
