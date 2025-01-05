import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { cars, clients } from "@/db/schema"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { AddClient } from "./add-client"
import { AddCar } from "./add-car"
import { carsBrandToSvgPath } from "@/usefulFunction"
  

type Props = {
    AllCars: typeof cars.$inferSelect[]
    AllClients: typeof clients.$inferSelect[]
  }
  

export const TableClients = ({
    AllCars, AllClients
}: Props) => {


    const clientsWithCars = AllClients.map ( client => {
        return ({
            clientId: client.id,
            clientFullName: client.fullName,
            clientPhone: client.phone,
            clientTelegram: client.telegram,
            clientAddress: client.address,
            clientDescription: client.description,
            clientCars: AllCars.filter(car => car.clientId == client.id)
        })
    })


    return(
        <div>
            <div className="pb-10 pt-5 flex items-center justify-center">

                <AddClient />

            </div>
            <div className="pb-20">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Клиенты</TableHead>
                            <TableHead className="text-right">Машины</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>

                        {clientsWithCars.map((client, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                    <div>
                                        <p className="pb-2">{client.clientFullName} </p>
                                        <p className="bg-blue-400 text-white rounded-xl text-center pt-1 pb-2">
                                        {/* <p className="pb-2"> */}
                                            {client.clientDescription}
                                        </p>
                                        <p className="pt-2 pb-2">@{client.clientTelegram} </p>
                                        <p className="pb-2">{client.clientPhone} </p>
                                    </div>
                                </TableCell>
                                {/* <TableCell>{client.clientPhone}</TableCell> */}

                                <TableCell>
                                    
                                    {client.clientCars.map((car, index) => 

                                        <div key = {index * 22019} className="pt-3 float-right">

                                            <Link href={`/car/${car.id}`}>
                                            {/* <Button className="text-right float-right content-end"> */}
                                                <Button>
                                                    <Image
                                                        src={carsBrandToSvgPath(car.brand)}
                                                        height={25}
                                                        width={25}
                                                        alt={car.brand}
                                                        className="pr-2"
                                                        />
                                                    
                                                    <h1 className="font-bold">{car.brand} {car.model}</h1>
                                                </Button>
                                            </Link>
                                        </div>      
                                    )}
                                    <div className="float-right pt-4 pl-20">
                                    
                                        <AddCar 
                                            clientId = {client.clientId}
                                        />

                                    </div>
                                 
                                    
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
            </div>
        </div>
    )
  }