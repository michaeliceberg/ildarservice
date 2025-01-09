'use server'

import db from "@/db/drizzle";
import { cars } from "@/db/schema";
import { cache } from "react";



function getRandomInt(min: number, max: number) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }



export const uploadNewCar = cache(async (clientToAddObject: typeof cars.$inferSelect, clientId: number) => {
	
	await db.insert(cars).values(
		{
			id: getRandomInt(10000, 9999999),
			number: clientToAddObject.number,
		    brand: clientToAddObject.brand,
		    model: clientToAddObject.model,
		    yearProduction: clientToAddObject.yearProduction,
		    odometer: clientToAddObject.odometer,
		    vin: clientToAddObject.vin,
			clientId: clientId,
		})
	
 
});