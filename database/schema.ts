import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
  pgEnum,
  date,
} from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum("satus", ["PENDING", "APPROVED", "REJECTED"]);
export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);
export const BOOK_STATUS_ENUM = pgEnum("book_status", ["BORROWED", "RETURN"]);

export const users = pgTable("users_table", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  universityId: integer("university_id").notNull().unique(),
  password: text("password").notNull(),
  universityCard: text("university_card").notNull(),
  status: STATUS_ENUM("status").default("PENDING"),
  role: ROLE_ENUM("role").default("USER"),
  lastActivityDate: date("lastActivityDate").notNull().defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
