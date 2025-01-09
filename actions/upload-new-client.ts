'use server'

import db from '@/db/drizzle';
import { clients } from '@/db/schema';
import {cache} from 'react'
// import db from './drizzle';
// import { cars } from './schema';



function getRandomInt(min: number, max: number) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }


export const uploadNewClient = cache(async (clientToAddObject: typeof clients.$inferSelect) => {
	
	await db.insert(clients).values(
		{
			id: getRandomInt(10000, 9999999),
			fullName: clientToAddObject.fullName,
		    dateBirth: clientToAddObject.dateBirth,
		    phone: clientToAddObject.phone,
		    telegram: clientToAddObject.telegram,
		    address: clientToAddObject.address,
		    description: clientToAddObject.description,
		})
	
 
});