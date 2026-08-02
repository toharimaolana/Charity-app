import { mysqlTable, varchar, int, text, datetime, boolean, timestamp } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
	id: varchar('id', { length: 255 }).primaryKey(),
	username: varchar('username', { length: 255 }).notNull().unique(),
	email: varchar('email', { length: 255 }),
	passwordHash: varchar('password_hash', { length: 255 }),
	avatarUrl: text('avatar_url'),
	role: varchar('role', { length: 50 }).default('donor').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

export const session = mysqlTable('session', {
	id: varchar('id', { length: 255 }).primaryKey(),
	userId: varchar('user_id', { length: 255 })
		.notNull()
		.references(() => user.id),
	expiresAt: datetime('expires_at').notNull()
});

export const category = mysqlTable('category', {
	id: varchar('id', { length: 255 }).primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
	slug: varchar('slug', { length: 255 }).notNull().unique(),
	icon: varchar('icon', { length: 100 }).notNull()
});

export const campaign = mysqlTable('campaign', {
	id: varchar('id', { length: 255 }).primaryKey(),
	title: varchar('title', { length: 255 }).notNull(),
	slug: varchar('slug', { length: 255 }).notNull().unique(),
	description: text('description').notNull(),
	targetAmount: int('target_amount').notNull(),
	currentAmount: int('current_amount').default(0).notNull(),
	categorySlug: varchar('category_slug', { length: 255 }).notNull(),
	imageUrl: text('image_url').notNull(),
	location: varchar('location', { length: 255 }),
	deadline: datetime('deadline').notNull(),
	isUrgent: boolean('is_urgent').default(false).notNull(),
	status: varchar('status', { length: 50 }).default('active').notNull(),
	userId: varchar('user_id', { length: 255 })
		.notNull()
		.references(() => user.id),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

export const donation = mysqlTable('donation', {
	id: varchar('id', { length: 255 }).primaryKey(),
	campaignId: varchar('campaign_id', { length: 255 })
		.notNull()
		.references(() => campaign.id),
	userId: varchar('user_id', { length: 255 }).references(() => user.id),
	donorName: varchar('donor_name', { length: 255 }).default('Donatur Baik'),
	amount: int('amount').notNull(),
	message: text('message'),
	isAnonymous: boolean('is_anonymous').default(false).notNull(),
	paymentStatus: varchar('payment_status', { length: 50 }).default('paid').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull()
});
