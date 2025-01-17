'use client'

import { cars, clients, works } from "@/db/schema"


import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { TabCarsWork } from "./tab-cars"



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

// const [searchCar, setSearchCar] = useState('')


const noFilterAllWorksInfo = AllWorks.map(works => {
    const filteredCars = AllCars.filter(car => car.id === works.carId)[0]
    const filteredClients = AllClients.filter(client => client.id === filteredCars.clientId)[0]
    return ({
        id: works.id,
        dateDone: works.dateDone || '',
        odometerWas: works.odometerWas || '',
        workDone: works.workDone|| '',
        brand: filteredCars.brand|| '',
        model: filteredCars.model|| '',
        vin: filteredCars.vin || '',
        yearProduction: filteredCars.yearProduction|| '',
        number: filteredCars.number || '',
        clientFullName: filteredClients.fullName|| '',
        description: filteredClients.description|| '',
        phone: filteredClients.phone|| '',
        imageUrl: works.imageUrl|| '',
    })
})


const allWorksInfo = noFilterAllWorksInfo


// .filter(
//     el => el.number?.toLocaleLowerCase().includes(searchCar.toLocaleLowerCase())
//     || el.brand?.toLowerCase().includes(searchCar.toLocaleLowerCase())
//     || el.model?.toLowerCase().includes(searchCar.toLocaleLowerCase())
    
    
// )


const uniqueCarsTO = [...new Set(allWorksInfo.map(item => item.number))];


// const mixers = carsObject.filter(el => el.type.toUpperCase()== 'М')

return(

    <div>
        
        <Tabs defaultValue="all" className="pt-5">
    
            <TabsList className="grid w-full grid-cols-4">
            {/* <TabsList className="w-full flex justify-between"> */}
                {uniqueCarsTO.map(car => (
                    <TabsTrigger key={getRandomInt(10000,999999)} value={car}>{car}</TabsTrigger>
                ))}
            </TabsList>
        

            {uniqueCarsTO.map(car => (
                <TabsContent key={getRandomInt(10000,999999)} value={car} className="pt-10">
                    <TabCarsWork allWorksInfo={allWorksInfo.filter(el => el.number == car)} />
                    {/* <TabCarsWork allWorksInfo={allWorksInfo} /> */}
                </TabsContent>
            ))}

            

        </Tabs>

    </div>

)
}

export default TableAllWorks