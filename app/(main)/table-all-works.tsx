'use client'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { TabCarsWork } from "./tab-cars-work"
import { AddWork } from "@/components/add-work"
import { cars } from "@/db/schema"
import { UserX } from "lucide-react"
// import { T } from "./page"



type Props = {
    allWorksInfo: {
        id: number,
        dateDone: Date,
        odometerWas: string,
        workDone: string,
        carId: number,
        brand: string,
        model: string,
        vin: string,
        yearProduction: string,
        number: string,
        clientFullName: string,
        description: string,
        phone: string,
        imageUrl: string,
    }[],
    // allWorksInfo: T,

    allCarNums: (string | null)[],

    carsNoWorks: (typeof cars.$inferSelect | undefined)[],

    noWorksFilter: {
        id: number,
        dateDone: Date,
        odometerWas: string,
        workDone: string,
        carId: number,
        brand: string,
        model: string,
        vin: string,
        yearProduction: string,
        number: string,
        clientFullName: string,
        description: string,
        phone: string,
        imageUrl: string,
    }[],

  }
  

    export const TableAllWorks = ({
        allWorksInfo, allCarNums, carsNoWorks, noWorksFilter,
    }: Props) => {



    function getRandomInt(min: number, max: number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    // const [searchCar, setSearchCar] = useState('')

    const uniqueCarsTO = [...new Set(allWorksInfo.map(item => item.number))];


return(

    <div>
        
        <Tabs defaultValue="all" className="pt-5">
    
            <TabsList className="grid  grid-cols-4 gap-y-4 mb-10">
            {/* <TabsList className="w-full flex justify-between"> */}
            {/* {uniqueCarsTO.map(car => ( */}
            
            {
                
            allCarNums.map(car => (

                    car &&
                    <TabsTrigger key={getRandomInt(10000,999999)} value={car}>{car}</TabsTrigger>
                
                
                )) 
            }
            </TabsList>
        



            {allCarNums.map(car => (
                car && uniqueCarsTO.includes(car) &&
                
                <TabsContent key={getRandomInt(10000,999999)} value={car} className="pt-10">
                    <AddWork allWorksInfo={allWorksInfo.filter(el => el.number == car)} />
                    <TabCarsWork allWorksInfo={allWorksInfo.filter(el => el.number == car)} />
                </TabsContent>

            ))}




            {
                carsNoWorks.length > 0 &&

                carsNoWorks.map(car => 

                car?.number != undefined &&

                <TabsContent key={getRandomInt(10000,999999)} value={car?.number} className="pt-10">
                    <AddWork allWorksInfo={noWorksFilter.filter(el => el.number == car?.number)} />
                    
                    <div className="border border-gray-500 border-dashed rounded-xl m-4">
                        <p className="m-4 text-center font-bold text-gray-500  text-lg">
                        {car.number} 
                        <br />
                        </p>

                        <UserX className="m-4 mb-2 mt-1 size-12 text-gray-500  mx-auto flex"/>

                        <p className="m-4 text-center text-gray-500 font-bold  text-lg">
                            Работ еще не было!
                        </p>
                    </div>
                </TabsContent>
                )
            }

            

        </Tabs>

    </div>

)
}

export default TableAllWorks