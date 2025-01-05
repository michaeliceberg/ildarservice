'use client'

import { CircleCheckBig } from "lucide-react";



type Props = {
    title: string;
    description: string;
    // imgSrc: string;
    // id: number;
    // percentageDone: number;
}

export const ClientBanner = ({
    title,
    description,
    // imgSrc,
    // id,
    // percentageDone,
}: Props)=>{

    const percentageDone = 20

    return(
        <div className="w-full rounded-xl  bg-blue-400 p-5 text-white flex items-center justify-between">





        <div className="flex flex-1 items-center justify-between">

            <div className="space-y-2.5">
                <h3 className="text-2xl font-bold">
                    {title}
                </h3>

                <p className="text-lg">
                    {description}
                </p>

                <div className="flex flex-1 gap-2">
                    <CircleCheckBig className="h-6 w-6"/>
                    {Math.round(percentageDone*100)}%
                </div>

            </div>  




        </div>


        <div>
        </div>



        </div> 
    )
}