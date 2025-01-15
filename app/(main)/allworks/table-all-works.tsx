'use client'

import { AddWork } from "@/components/add-work"
import { Input } from "@/components/ui/input"
import { cars, clients, works } from "@/db/schema"
import { CalendarCheck, Code, Gauge, Search, User, Wrench } from "lucide-react"
import { useState } from "react"




type Props = {
    AllCars: typeof cars.$inferSelect[]
    AllWorks: typeof works.$inferSelect[]
    AllClients: typeof clients.$inferSelect[]
  }
  

export const TableAllWorks = ({
    AllCars, AllWorks, AllClients
}: Props) => {


if (!AllCars) {
    throw new Error('Нет машин!');
}
if (!AllWorks) {
    throw new Error('Нет клиентов!');
}

function getRandomInt(min: number, max: number) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

const [searchCar, setSearchCar] = useState('')


const noFilterAllWorksInfo = AllWorks.map(works => {
    const filteredCars = AllCars.filter(car => car.id === works.carId)[0]
    const filteredClients = AllClients.filter(client => client.id === filteredCars.clientId)[0]
    return ({
        id: works.id,
        dateDone: works.dateDone,
        odometerWas: works.odometerWas,
        workDone: works.workDone,
        brand: filteredCars.brand,
        model: filteredCars.model,
        vin: filteredCars.vin,
        yearProduction: filteredCars.yearProduction,
        number: filteredCars.number,
        clientFullName: filteredClients.fullName,
        description: filteredClients.description,
        phone: filteredClients.phone,
    })
})

const allWorksInfo = noFilterAllWorksInfo.filter(el => el.number?.toLocaleLowerCase().includes(searchCar.toLocaleLowerCase()) 
    || el.brand?.toLowerCase().includes(searchCar.toLocaleLowerCase())
    || el.model?.toLowerCase().includes(searchCar.toLocaleLowerCase()))

return(

    <div>
        
        <div className="pb-5 pt-5 flex items-center justify-center">

                <div key = {'searchCar'} className="grid grid-cols-4 items-center gap-4">

                    <Input 
                        id='searchCar'
                        value={searchCar}
                        className="col-span-3" 
                        onChange={(e)=>{setSearchCar(e.target.value) }}
                    />

                    <h3>
                        <Search className="h-6 w-6 text-gray-600"/>
                    </h3>

            </div>

        </div>

        {/* <p className="pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">Проведённые работы:</p> */}

                        {allWorksInfo.length > 0 &&
                        

                            allWorksInfo.map(work => (
                             <div className="w-full rounded-xl border-2  border-gray-300 mb-10" key={work.id}>
                                <div className="flex justify-between items-center mt-5">
                                    


                                    <div key={getRandomInt(10000,999999)} className="space-y-2.5 m-4">
                                    

                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            <Code className="h-6 w-6 text-gray-500"/>
                                            Код работы: {JSON.stringify(work.id)}
                                        </h3>


                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            <CalendarCheck className="h-6 w-6 text-gray-500"/>
                                            {/* {JSON.stringify(work.dateDone)} */}

                                            {work.dateDone.toLocaleDateString("en-US")}


                                        </h3>

                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            <Gauge className="h-6 w-6 text-gray-500"/>
                                            {work.odometerWas}км
                                        </h3>


                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            <Wrench className="h-6 w-6 text-gray-500"/>
                                            {work.workDone}
                                        </h3>

                                    </div>



                                    <div key={getRandomInt(10000,999999)} className="space-y-2.5 m-4">
                                    

                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            <User className="h-6 w-6 text-gray-500"/>
                                            {work.clientFullName}
                                        </h3>


                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            {/* <CalendarCheck className="h-6 w-6 text-gray-500"/> */}
                                            {work.brand}
                                        </h3>

                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            {/* <Gauge className="h-6 w-6 text-gray-500"/> */}
                                            {work.model}
                                        </h3>


                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            {/* <Wrench className="h-6 w-6 text-gray-500"/> */}
                                            {work.number}
                                        </h3>

                                    </div>





                                    
                                
                                </div>

                                <div key={getRandomInt(10000,999999)} className="mb-5 pt-5 flex justify-center">
                                    <AddWork />
                                </div>
                            </div>   
                            ))

                        
                        }




    </div>

)
}

export default TableAllWorks