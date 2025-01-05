import { neon } from '@neondatabase/serverless';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../db/schema';

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });
const main = async () => {
	try {
		console.log('Seeding DB');
		await db.delete(schema.clients);
		await db.delete(schema.cars);
		await db.delete(schema.works);
	

		// ADD COURSES
		//
		await db.insert(schema.clients).values([
			{id:1,fullName: 'Михаил Королёв',dateBirth: '11.10.1988',phone: '89160991997',telegram: 'michaeldeve', address: 'г.Королёв, Пионерская 12-а',description: 'друг'},
			{id:2,fullName: 'Владимир Путин',dateBirth: '7.10.1952', phone: '84951001010',telegram: 'putin', address: 'г.Москва, Кремль', description: 'президент'},
		]);



		await db.insert(schema.cars).values([
			{id: 1, number: 'а172нк790',brand: 'Nissan',model: 'XTrail', yearProduction: '2020', odometer: '77000', vin: 'XFJLKSFLJH', clientId: 1},
			{id: 2, number: 'с218кн750',brand: 'BMW',model: '316i', yearProduction: '2014', odometer: '129000', vin: 'WOIEQUE', clientId: 1},
			{id: 3, number: 'a001aa777',brand: 'Tesla',model: 'model S', yearProduction: '2021', odometer: '1000', vin: 'QQQQQQQ', clientId: 2},
			{id: 4, number: 'a002aa777',brand: 'BMW',model: '740i', yearProduction: '2022', odometer: '2000', vin: 'PPPPPP', clientId: 2},
			{id: 5, number: 'a003aa777',brand: 'ВАЗ',model: '2107', yearProduction: '2023', odometer: '3000', vin: 'LLLLLL', clientId: 2},

		]);



		await db.insert(schema.works).values([
			{id: 1, workDone: 'ТО поменяли масло и три фильтра', carId: 1},
			{id: 2, workDone: 'ТО поменяли масло и три фильтра. Аккумулятор', carId: 2},

		]);

			


		// id: serial('id').primaryKey(),
		// dateDone: timestamp('date_done').notNull().defaultNow(),
		// workDone:  text('work_done').notNull(),
		// carId: integer('car_id')
		// 	.references(() => cars.id, { onDelete: 'cascade' })
		// 	.notNull(),
		// order: integer('order').notNull(),
			













	// id: serial('id').primaryKey(),
	// date: timestamp('date').notNull().defaultNow(),
	// stamp: text('stamp').notNull(),
	// details: text('details').notNull(),
	// isModified: text('is_modified').notNull(),
	// stampModified: text('stamp_modified').notNull(),
	// betonAsphalt: text('beton_asphalt').notNull(),
	// zavod: text('zavod').notNull(),



		console.log('Seeding Finished');
	} catch (error) {
		console.error(error);
		throw new Error('Не получилось получить БД');
	}
};

main();
