'use client'

import { AddWork } from "@/components/add-work"
import { CalendarCheck, Code, Gauge, User, Wrench } from "lucide-react"
import Image from "next/image"




type Props = {
    allWorksInfo: {
        id: number,
        dateDone: Date,
        odometerWas: string,
        workDone: string,
        brand: string,
        model: string,
        vin: string,
        yearProduction: string,
        number: string,
        clientFullName: string,
        description: string,
        phone: string,
        imageUrl: string,
    }[]
  }
  

export const TabCarsWork = ({
    allWorksInfo
}: Props) => {



function getRandomInt(min: number, max: number) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

// const [searchCar, setSearchCar] = useState('')


// const noFilterAllWorksInfo = TabCarsWork.map(works => {
//     const filteredCars = AllCars.filter(car => car.id === works.carId)[0]
//     const filteredClients = AllClients.filter(client => client.id === filteredCars.clientId)[0]
//     return ({
//         id: works.id,
//         dateDone: works.dateDone,
//         odometerWas: works.odometerWas,
//         workDone: works.workDone,
//         brand: filteredCars.brand,
//         model: filteredCars.model,
//         vin: filteredCars.vin,
//         yearProduction: filteredCars.yearProduction,
//         number: filteredCars.number,
//         clientFullName: filteredClients.fullName,
//         description: filteredClients.description,
//         phone: filteredClients.phone,
//         imageUrl: works.imageUrl,
//     })
// })




return(

    <div>
        
        {/* <div> 
            {uniqueCarsTO.map(el => (
                <div>
                    {el}
                </div>
            ))}
        </div> */}

        {/* <div className="pb-5 pt-5 flex items-center justify-center">

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

        </div> */}

        {/* <p className="pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">Проведённые работы:</p> */}

                        {allWorksInfo.length > 0 &&
                        

                            allWorksInfo.map(work => (
                             <div className="w-full rounded-xl border-2  border-gray-300 mb-10" key={work.id}>
                                <div className="flex justify-between items-center mt-5">
                                    


                                    <div key={getRandomInt(10000,999999)} className="space-y-2.5 m-4">
                                    
                                        {work.imageUrl && 
                                        <Image src={'/to/'+work.imageUrl} alt={work.imageUrl} height={270} width={293.33} className='rounded-lg drop-shadow-md border object-cover' />
                                        }

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

export default TabCarsWork