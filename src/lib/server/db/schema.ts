import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const worldDB = sqliteTable('world', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
})

export const metalGroupsDB = sqliteTable('metalgroups', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
})

export const itemDB = sqliteTable('item', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  metal_id: text('metal_id').references(() => metalGroupsDB.id),
  world_id: text('world_id').references(() => worldDB.id),
  path: text('path', { mode: "json" }).notNull().$type<number[]>().default(sql`(json_array())`),
  inputItemName: text('inputItemName').references(() => inputItemDB.name).default("ingot")
});

export const inputItemDB = sqliteTable("inputItem", {
  name: text('name').primaryKey(),
  inIngots: integer('inIngots'),
  inMillibuckets: integer('inMillibuckets')
});

export type ItemDBSelect = typeof itemDB.$inferSelect;
