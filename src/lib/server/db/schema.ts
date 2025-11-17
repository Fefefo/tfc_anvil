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
  metal_id: text('metal_id').references(() => metalGroupsDB.id).notNull(),
  world_id: text('world_id').references(() => worldDB.id).notNull(),
  path: text('path', { mode: "json" }).notNull().$type<number[]>().default(sql`(json_array())`).notNull(),
  inputItemName: text('inputItemName').references(() => inputItemDB.name).default("ingot").notNull()
});

export const inputItemDB = sqliteTable("inputItem", {
  name: text('name').primaryKey().notNull(),
  inIngots: integer('inIngots').notNull(),
  inMillibuckets: integer('inMillibuckets').notNull()
});

export type ItemDBSelect = typeof itemDB.$inferSelect;
