import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { incOut } from "@/db/schema"
  

  type Props = {
    // weights: typeof incOut.$inferSelect[]
    weights: string[][]
  }

//   activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;


  export const TableInOut = ({
    weights
}: Props) => {

    

    const ReplaceBeton = (beton: string) => {
       return beton.replace(/ /g,'')
                    .replace('БСТ','')
                    .replace('ПОКП№115','')
                    .replace('С/Д','')
                    .replace('С/В','')
                    .replace('НАГРАВИИ','ГРАВ')
                    .replace('НАГРАНИТЕ','ГРАН')
                    .replace('ФР.','')

                    .toLowerCase()
    }


    return(
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Время</TableHead>
                        <TableHead>Материал</TableHead>
                        <TableHead>т/м³</TableHead>
                        <TableHead>Контраг</TableHead>
                        <TableHead>З</TableHead>
                        {/* <TableHead>Авто №</TableHead> */}
                        <TableHead className="text-right">Авто №</TableHead>
                    </TableRow>
                </TableHeader>

{/* 
                {ResultLeaderTable.map((cur_user_stat, index) => (
                    <>
                        <li key={index}> */}


{/* bg-orange-400 */}

                <TableBody>
                    {weights.map((el, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{el[0]}</TableCell>
                            <TableCell className=
                                {el[6] == 'Приход'
                                    ? "w-full font-bold flex items-center justify-between"
                                    : el[6] == 'Инертные'
                                    ? "w-full rounded-xl  bg-fuchsia-500 font-bold text-white mt-2 flex items-center justify-between"
                                    : el[6] == 'Бетон'
                                    ? "w-full rounded-xl  bg-orange-400 font-bold text-white mt-2 flex items-center justify-between"
                                    : "w-full rounded-xl  bg-neutral-700 font-bold text-white mt-2 flex items-center justify-between"
                                }
                            >{ReplaceBeton(el[1])}</TableCell>
                            <TableCell>{el[2]}</TableCell>
                            <TableCell>{el[3].slice(0,5)}</TableCell>
                            <TableCell className=
                                                            {el[4] == 'Щ'
                                                            ? "w-full flex items-center mt-2 justify-between"
                                                            : el[4] == 'П'
                                                            ? "w-full rounded-xl  bg-blue-500 text-white mt-2 flex items-center justify-between"
                                                            : "w-full rounded-xl  bg-red-500 text-white mt-2 flex items-center justify-between"
                                                        }
                            
                            
                            >{el[4]}</TableCell>
                            {/* <TableCell>{el[5]}</TableCell> */}
                            <TableCell className="text-right">{el[5]}</TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
                </Table>
        </div>
    )
  }