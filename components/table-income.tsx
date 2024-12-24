import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
// import { incOut } from "@/db/schema"
  

  type Props = {
    сity: string
    // data: typeof incOut.$inferSelect[]
    dailyIncome: string[][]
  }


  
//   activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;


  export const TableIncome = ({
    сity, dailyIncome
}: Props) => {


    return(
        
        <div>
        <h1 className="flex justify-center w-full">
        {сity}
    </h1>
        <div className="w-full bg-white pb-3 flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">



        <div className="pb-20">


            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Время</TableHead>
                        <TableHead>Тонн</TableHead>
                        <TableHead>Материал</TableHead>
                        <TableHead>🚚</TableHead>
                        <TableHead className="text-right">Контраг</TableHead>
                    </TableRow>
                </TableHeader>

{/* 
                {ResultLeaderTable.map((cur_user_stat, index) => (
                    <>
                        <li key={index}> */}



                <TableBody>
                    {dailyIncome.map((el, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{el[0] }</TableCell>
                            <TableCell>{el[1]}</TableCell>
                            <TableCell>{el[3]}</TableCell>
                            <TableCell>{el[4]}</TableCell>
                            <TableCell className="text-right">{el[5].slice(0,7)}</TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
                </Table>
                </div>
        </div>
        </div>
    )
  }