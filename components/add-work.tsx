'use client'

// import { uploadNewClient } from "@/actions/upload-new-client"
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
import { useState } from "react"


export const AddWork = () => {
 





  // const fileInput = document.getElementById("fileInput"); // Replace with your HTML element ID
  // const file = fileInput.files[0];







  // const onSubmit=async(e)=>{ 
  //   e.preventDefault();
  //   const fd=new FormData()
  //   fd.append('myfile', image.name)
  //   let res=await fetch(`http://localhost:3000/api/upload`,{
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "image/jpeg",
  //       },
  //       body: fd,
  //     })
  //      let response=await res.json(); 
 
 
 
 
  // function getImageData(event: ChangeEvent<HTMLInputElement>) {
  //   // FileList is immutable, so we need to create a new one
  //   const dataTransfer = new DataTransfer();
  
  //   // Add newly uploaded images
  //   Array.from(event.target.files!).forEach((image) =>
  //     dataTransfer.items.add(image)
  //   );
  
  //   const files = dataTransfer.files;
  //   const displayUrl = URL.createObjectURL(event.target.files![0]);
  
  //   return { files, displayUrl };
  // }
 
 
 
 
 
 const [file, setFile] = useState<File>()
 




 
// const [pending, startTransition] = useTransition()
// const [status, setStatus] = useState('')

// console.log(pending)

const HandleOnClick = () => {

    // console.log('pending')

    console.log(file)
    // console.log(picture)
    // startTransition(()=> {s

    //   uploadNewClient(detailsClient)
    //   .then(()=>{
    //     setStatus('работа Добавлена! Закройте и обновите')
    //   })

    // })
  }


  // const handleNew = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFile(e.target.files?.[0])
  // }


  if (file) {

  const formData = new FormData();
  formData.append("file", file);
 
  // fetch("/api/upload", {
    // fetch(`/api/upl/${file.name}`, {
    fetch(`/api/${file.name}`, {
        // fetch(`/api/${file}`, {
        // fetch("/api/upl", {
        // method: "POST",
      method: "GET",
    // body: formData,
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

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

          <Button variant='default'>
            <Plus className="mr-2"/>
              Добавить работу
          </Button>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {/* <p className="pb-2 flex justify-center content-center">{contrag}</p> */}
            <p className="mt-2 pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">Новая работа</p>
            {/* <p className="mt-2 pb-2 flex justify-center content-center">{done}</p> */}
          </DialogTitle>
          <DialogDescription>

            {/* <p className={stampOriginal.length > 0 ? "bg-white" : "bg-yellow-200 font-bold flex justify-center content-center rounded-xl"}> */}
              {/* {stampOriginal.length > 0 ? "Изменить рецепт:" : "⚠️ Новый рецепт!"} */}
            {/* </p> */}
            Для машины
          </DialogDescription>
        </DialogHeader>





          <div className="grid gap-4 py-4">

            <div key = {'Что делали'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Что делали
                </Label>
                <Input 
                    id='fullName'
                    value={detailsClient.fullName}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, fullName: (e.target.value)}) }}
                />
            </div>


            <div key = {'Одометр'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Одометр
                </Label>
                <Input 
                    id='phone'
                    value={detailsClient.phone}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, phone: (e.target.value)}) }}
                />
            </div>


            <div key = {'На будущее'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  На будущее
                </Label>
                <Input 
                    id='telegram'
                    value={detailsClient.telegram}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, telegram: (e.target.value)}) }}
                />
            </div>



            <div key = {'фото'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  фото
                </Label>
                <Input 
                    id="photo" 
                    type="file" 
                    // value={detailsClient.telegram}
                    className="col-span-3" 
                    onChange={(e)=>{setFile(e.target.files?.[0])}}
                    // onChange={(e)=>{handleNew(e)}}
                />
            </div>



{/* 
            import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 
export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
} */}




            {/* <div key = {'др'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  др🎂
                </Label>
                <Input 
                    id='dateBirth'
                    value={detailsClient.dateBirth}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, dateBirth: (e.target.value)}) }}
                />
            </div> */}


            {/* <div key = {'адрес'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  адрес
                </Label>
                <Input 
                    id='address'
                    value={detailsClient.address}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, address: (e.target.value)}) }}
                />
            </div> */}

            {/* <div key = {'описание'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  описание
                </Label>
                <Input 
                    id='description'
                    value={detailsClient.description}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsClient({...detailsClient, description: (e.target.value)}) }}
                />
            </div> */}

            {/* { status != '' &&
              <p className="mt-2 pb-2 flex justify-center content-center text-white bg-green-500 pt-2 rounded-xl">{status}</p> 
            } */}
            
          </div>
        
        <DialogFooter>
          <Button 
            className="w-full" 
            type="submit" 
            onClick={HandleOnClick}
          >
            Добавить работу

            
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
