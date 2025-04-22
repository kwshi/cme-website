// website content data
import { date, pgSchema, serial, text, time, uuid } from 'drizzle-orm/pg-core';

export const schema = pgSchema('content');

// performances etc.
export const event = schema.table('event', {
  title: text().notNull(),
  link: text(),
  date: date().notNull(),
  start: time().notNull(),
  end: time().notNull(),
  description: text().notNull(),
});

// practice times, class times etc.
export const day = schema.enum('day', ['u', 'm', 't', 'w', 'r', 'f', 's']);
export const schedule = schema.table('schedule', {
  day: day().notNull(),
  start: time({ withTimezone: true, precision: 0 }).notNull(),
  end: time({ withTimezone: true, precision: 0 }).notNull(),
});

// general content sections
export const section = schema.table('section', {
  id: serial().primaryKey(),
  heading: text().notNull(),
  body: text().notNull(),
});

export const instrument = schema.table('instrument', {
  title: text().primaryKey(),
  description: text().notNull(),
});
