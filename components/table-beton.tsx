'use client'

import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ReplaceBeton, ReplaceBid, ReplaceDate } from "./table-weights"
import { useState } from "react"
import { useRecipeModal } from "@/app/store/use-exit-modal"
import { RecipeDialog } from "./dialog-recipe"
// import { incOut } from "@/db/schema"
  

  type Props = {
    city: string
    // data: typeof incOut.$inferSelect[]
    beton: string[][]
  }


  
//   activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;


  export const TableBeton = ({
    city, beton
}: Props) => {



    const {open} = useRecipeModal()

    const [a, setA] = useState(1)

    const ClickHandler = () => {
        setA(a+1)
    }


    return(

        <div>
            <h1>
                {a}
            </h1>
            {/* <div className="w-full bg-white pb-3 flex items-center justify-between border-b-2 mb-5 font-bold lg:z-50"> */}

            <div>

            <div className="pb-20">


                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Время</TableHead>
                            <TableHead className="text-right p-0.5">Вып/</TableHead>
                            {/* <TableHead className="pr-0.5 pl-0.5">/</TableHead> */}
                            <TableHead className="text-left p-0.5">Из</TableHead>
                            <TableHead>Контраг</TableHead>
                            <TableHead>З</TableHead>
                            <TableHead>🚚</TableHead>
                            <TableHead>Рецепт</TableHead>
                            {/* <TableHead>Авто №</TableHead> */}
                            {/* <TableHead>Заказ</TableHead> */}

                            {/* <TableHead className="text-right">Заказ</TableHead> */}
                            <TableHead className="text-right">Авто №</TableHead>
                        </TableRow>
                    </TableHeader>

    {/* 
                    {ResultLeaderTable.map((cur_user_stat, index) => (
                        <>
                            <li key={index}> */}



                    <TableBody>
                        {beton.map((el, index) => (


                            

                            <TableRow key={index}>
                                <TableCell className="font-medium">{ReplaceDate(el[0])}</TableCell>
                                <TableCell className=
 "text-right pr-0.5 text-white bg-green-500 rounded-l-xl"
    // "w-full rounded-xl  bg-orange-400 font-bold text-white mt-2 flex items-center justify-between"
                                                                    // {el[1] == el[3] 
                                                                    //     ? "text-right pr-0.5  text-white bg-green-500 rounded-l-xl"
                                                                    //     : "text-right p-0.5"
                                                                    // }
                                    
                                                                    
                                >{el[1] + "/"} </TableCell>
                                
                                
                                {/* <TableCell className=" pr-0.5 pl-0.5">{el[2]}</TableCell> */}
                                
                                

                                <TableCell className=
                                    // "text-left pl-0.5 text-white bg-green-500 rounded-r-xl mt-6  items-center  justify-between"
                                    "text-right pl-0 text-white bg-green-500 rounded-r-xl"
                                    >{el[3]}</TableCell>
                                <TableCell>{el[4]}</TableCell>
                                <TableCell>{el[5]}</TableCell>
                                <TableCell>{el[6]}</TableCell>

                                
                                <TableCell>
                                    <RecipeDialog 
                                        recipe = {ReplaceBeton(el[7])} 
                                        contrag = {el[4]}
                                        done = {el[1] + "/" + el[3]}
                                    />
                                    
                                </TableCell>

                                {/* <TableCell>{el[7]}</TableCell> */}
                                {/* <TableCell>{
                                    // el[8].split(",").length > 0
                                    // ? el[8].slice(0, 45)
                                    // : el[8]
                                    el[8].slice(0, 45)
                                    }
                                </TableCell> */}

                                <TableCell className="text-right">{el[8].slice(0, 45)}</TableCell>
                                {/* <TableCell className="text-right">{ReplaceBid(el[9])}</TableCell> */}
                            </TableRow>
                        ))}
                        
                    </TableBody>
                    </Table>
                    </div>
            </div>
        </div>
    )
  }