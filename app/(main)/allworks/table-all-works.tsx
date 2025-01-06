import { cars, clients, works } from "@/db/schema"
import { CalendarCheck, Code, Gauge, User, Wrench } from "lucide-react"




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



const allWorksInfo = AllWorks.map(works => {
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

// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

return(

    <div className="pt-4">
        
        
        {/* <p className="pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">Проведённые работы:</p> */}

                        {allWorksInfo.length > 0 &&
                        

                            allWorksInfo.map(work => (
                                <div key={work.id} className="w-full rounded-xl border-2  border-gray-700 flex justify-between items-center mt-5 mb-10">
                                    


                                    <div className="space-y-2.5 m-4">
                                    

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



                                    <div className="space-y-2.5 m-4">
                                    

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

                            ))

                        
                        }




    </div>

)
}

export default TableAllWorks