'use client'

import { uploadNewClient } from "@/actions/upload-new-client"
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
// import { uploadNewClient } from "@/db/queries"
import { Plus } from "lucide-react"
import { useState, useTransition } from "react"


export const AddClient = () => {
 
  const [pending, startTransition] = useTransition()
  const [status, setStatus] = useState('')

  console.log(pending)

  const HandleOnClick = () => {
    startTransition(()=> {

      uploadNewClient(detailsClient)
      .then(()=>{
        setStatus('Клиент добавлен! Закройте и обновите')
      })

    })
  }

  const [detailsClient, setDetailsClient] = useState (
    {
      id: 1001,
      fullName: '',
      dateBirth: '',
      phone: '',
      telegram: '',
      address: '',
      description: '',
      dateCreated: new Date()
    }
  )

  return (
    <Dialog>
      <DialogTrigger asChild>

          <Button variant={"secondary"}>
            <Plus className="mr-2"/>
              добавить клиента
          </Button>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {/* <p className="pb-2 flex justify-center content-center">{contrag}</p> */}
            <p className="mt-2 pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">Новый клиент</p>
            {/* <p className="mt-2 pb-2 flex justify-center content-center">{done}</p> */}
          </DialogTitle>
          <DialogDescription>

            {/* <p className={stampOriginal.length > 0 ? "bg-white" : "bg-yellow-200 font-bold flex justify-center content-center rounded-xl"}> */}
              {/* {stampOriginal.length > 0 ? "Изменить рецепт:" : "⚠️ Новый рецепт!"} */}
            {/* </p> */}
            Потом добавим машину
          </DialogDescription>
        </DialogHeader>





          <div className="grid gap-4 py-4">

            <div key = {'ФИО'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  имя*
                </Label>
                <Input 
                    id='fullName'
                    value={detailsClient.fullName}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, fullName: (e.target.value)}) }}
                />
            </div>


            <div key = {'телефон'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  телефон
                </Label>
                <Input 
                    id='phone'
                    value={detailsClient.phone}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, phone: (e.target.value)}) }}
                />
            </div>


            <div key = {'телеграмм'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  телеграмм
                </Label>
                <Input 
                    id='telegram'
                    value={detailsClient.telegram}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, telegram: (e.target.value)}) }}
                />
            </div>


            <div key = {'др'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  др🎂
                </Label>
                <Input 
                    id='dateBirth'
                    value={detailsClient.dateBirth}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, dateBirth: (e.target.value)}) }}
                />
            </div>


            <div key = {'адрес'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  адрес
                </Label>
                <Input 
                    id='address'
                    value={detailsClient.address}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, address: (e.target.value)}) }}
                />
            </div>

            <div key = {'описание'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  описание
                </Label>
                <Input 
                    id='description'
                    value={detailsClient.description}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, description: (e.target.value)}) }}
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
            Добавить клиента

            
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
