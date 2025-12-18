import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const bookingTable = pgTable('booking', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  phone: text().notNull(),
  people: text().notNull(),
  hour: text().notNull(),
  done: boolean().default(false).notNull(),
})