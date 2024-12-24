import { neon } from '@neondatabase/serverless';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });
const main = async () => {
	try {
		console.log('Seeding DB');
		await db.delete(schema.incOut);
	

		// ADD COURSES
		//
		await db.insert(schema.incOut).values([
			{id:1,type:'Приход',date:'2024-12-10 12:14:46.991796', material:'Габбро',mass:'40',contrag:'Орион',realizacia:'Реализация 200001', numCar: 'а712сн790',zakaz:'Заказ 414', zavod:'Щ'},
			{id:2,type:'Приход',date:'2024-12-10 04:14:46.991796',material:'Габбро',mass:'10',contrag:'Орион',realizacia:'Реализация 200002', numCar: 'в449сн790',zakaz:'Заказ 414', zavod:'Щ'},
			{id:3,type:'Приход',date:'2024-12-10 06:14:46.991796',material:'Габбро',mass:'20',contrag:'Орион',realizacia:'Реализация 200003', numCar: 'т104сн790',zakaz:'Заказ 414', zavod:'Щ'},
			{id:4,type:'Приход',date:'2024-12-10 07:14:46.991796',material:'Габбро',mass:'15',contrag:'Орион',realizacia:'Реализация 200004', numCar: 'н144со790',zakaz:'Заказ 414', zavod:'Щ'},
			{id:5,type:'Приход',date:'2024-12-10 01:14:46.991796',material:'Габбро',mass:'17',contrag:'Орион',realizacia:'Реализация 200005', numCar: 'в449сн790',zakaz:'Заказ 414', zavod:'Щ'},
			{id:6,type:'Приход',date:'2024-12-10 02:14:46.991796',material:'Габбро',mass:'35',contrag:'Орион',realizacia:'Реализация 200006', numCar: 'т104сн790',zakaz:'Заказ 414', zavod:'Щ'},
	]);





		console.log('Seeding Finished');
	} catch (error) {
		console.error(error);
		throw new Error('Не получилось получить БД');
	}
};

main();
