'use client'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { TabCarsWork } from "./tab-cars-work"
import { AddWork } from "@/components/add-work"



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
  

    export const TableAllWorks = ({
        allWorksInfo,
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
    
            <TabsList className="grid w-full grid-cols-4">
            {/* <TabsList className="w-full flex justify-between"> */}
                {uniqueCarsTO.map(car => (
                    <TabsTrigger key={getRandomInt(10000,999999)} value={car}>{car}</TabsTrigger>
                ))}
            </TabsList>
        


            {/* <Button 
                className="mt-5 flex  mx-auto " 
                type="submit" 
            >
                <Wrench className="mr-2"/>
                Добавить Работу
            </Button> */}

            



            {uniqueCarsTO.map(car => (
                <TabsContent key={getRandomInt(10000,999999)} value={car} className="pt-10">
                    <AddWork allWorksInfo={allWorksInfo.filter(el => el.number == car)} />
                    <TabCarsWork allWorksInfo={allWorksInfo.filter(el => el.number == car)} />
                </TabsContent>
            ))}

            

        </Tabs>

    </div>

)
}

export default TableAllWorks