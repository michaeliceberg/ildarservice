import {cache} from 'react'
import db from './drizzle';
import { cars, clients } from './schema';



function getRandomInt(min: number, max: number) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  


export const getClients = cache(async () => {
	const clients = await db.query.clients.findMany();
	return clients;
});


export const getCars = cache(async () => {
	const cars = await db.query.cars.findMany();
	return cars;
})

export const getWorks = cache(async () => {
	const works = await db.query.works.findMany();
	return works;
})




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

