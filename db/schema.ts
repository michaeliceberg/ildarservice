import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';




export const clients = pgTable('clients', {
	id: serial('id').primaryKey(),
	fullName: text('full_name').notNull(),
	dateBirth: text('date_birth'),
	phone: text('phone').notNull(),
	telegram: text('telegram'),
	address: text('address'),
	description: text('description'),
	dateCreated: timestamp('date_created').notNull().defaultNow(),

	// imageSrc: text('image_src').notNull(),
});

export const coursesRelations = relations(clients, ({ many }) => ({
	cars: many(cars),
}));





export const cars = pgTable('cars', {
	id: serial('id').primaryKey(),
	number: text('number'),  //a001aa777
	brand: text('brand').notNull(),
	model: text('model'), 
	yearProduction: text('year_production'),
	odometer: text('odometer'),
	vin:  text('vin'),
	dateCreated: timestamp('date_created').notNull().defaultNow(),


	// imageSrc: text('image_src').notNull(),
	clientId: integer('client_id')
		.references(() => clients.id, { onDelete: 'cascade' })
		.notNull(),
	// order: integer('order').notNull(),

});


export const carsRelations = relations(cars, ({ many, one }) => ({
	course: one(clients, {
		fields: [cars.clientId],
		references: [clients.id],
	}),
	works: many(works),
}));





export const works = pgTable('works', {
	id: serial('id').primaryKey(),
	dateDone: timestamp('date_done').notNull().defaultNow(),
	workDone:  text('work_done').notNull(),
	carId: integer('car_id')
		.references(() => cars.id, { onDelete: 'cascade' })
		.notNull(),
	// order: integer('order').notNull(),
});




export const worksRelations = relations(works, ({ one }) => ({
	unit: one(cars, {
		fields: [works.carId],
		references: [cars.id],
	}),
}));

