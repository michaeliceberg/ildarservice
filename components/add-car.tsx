'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { uploadNewCar } from "@/db/queries"
import { Car } from "lucide-react"
import { useState, useTransition } from "react"

type Props = {
  clientId: number
  clientFullName: string
}


export const AddCar = ({
  clientId, clientFullName
}: Props) => {
 
  const [pending, startTransition] = useTransition()
  const [status, setStatus] = useState('')

  const HandleOnClick = () => {
    startTransition(()=> {

      uploadNewCar(detailsCar, clientId)
      .then(()=>{
        setStatus('Авто добавлено! Закройте и обновите')
      })
      

    })
  }

  console.log(pending)
  

  const [detailsCar, setDetailsCar] = useState (
    {
      id: 2001,
      number: '',
      brand: '',
      model: '',
      yearProduction: '',
      odometer: '',
      vin: '',
      dateCreated: new Date(),
      clientId: 9000,
    }
  )

  return (
    <Dialog>
      <DialogTrigger asChild>

        <Button variant='default'> +
          <Car 
              className="pl-1"
              height={25}
              width={25}
          />
        </Button>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {/* <p className="pb-2 flex justify-center content-center">{contrag}</p> */}
            <p className="mt-2 pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">Новая машина {clientFullName}</p>
            {/* <p className="mt-2 pb-2 flex justify-center content-center">{done}</p> */}
          </DialogTitle>
          <DialogDescription>

            {/* <p className={stampOriginal.length > 0 ? "bg-white" : "bg-yellow-200 font-bold flex justify-center content-center rounded-xl"}> */}
              {/* {stampOriginal.length > 0 ? "Изменить рецепт:" : "⚠️ Новый рецепт!"} */}
            {/* </p> */}
            
          </DialogDescription>
        </DialogHeader>



          <div className="grid gap-4 py-4">

            <div key = {'гос№'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  гос№*
                </Label>
                <Input 
                    placeholder="с218кн750"
                    id='number'
                    value={detailsCar.number}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsCar({...detailsCar, number: (e.target.value)}) }}
                />
            </div>


            <div key = {'марка'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  марка
                </Label>
                <Input 
                    placeholder="bmw"
                    id='brand'
                    value={detailsCar.brand}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsCar({...detailsCar, brand: (e.target.value)}) }}
                />
            </div>


            <div key = {'модель'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  модель
                </Label>
                <Input 
                    placeholder="316i"
                    id='model'
                    value={detailsCar.model}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsCar({...detailsCar, model: (e.target.value)}) }}
                />
            </div>


            <div key = {'VIN'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  VIN
                </Label>
                <Input 
                    id='yearProduction'
                    value={detailsCar.yearProduction}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsCar({...detailsCar, yearProduction: (e.target.value)}) }}
                />
            </div>


            <div key = {'год'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  год
                </Label>
                <Input 
                    placeholder="2014"
                    id='odometer'
                    value={detailsCar.odometer}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsCar({...detailsCar, odometer: (e.target.value)}) }}
                />
            </div>

            <div key = {'пробег'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  пробег
                </Label>
                <Input 
                    placeholder="1000"
                    id='vin'
                    value={detailsCar.vin}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsCar({...detailsCar, vin: (e.target.value)}) }}
                />
            </div>

            { status != '' &&
              <p className="mt-2 pb-2 flex justify-center content-center text-white bg-green-500 pt-2 rounded-xl">{status}</p> 
            }
            
          </div>
        
        <DialogFooter>
          <Button 
            className="w-full" 
            type="submit" 
            onClick={HandleOnClick}
          >
            Добавить авто

            
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
