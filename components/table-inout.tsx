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
    data: typeof incOut.$inferSelect[]
  }

//   activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;


  export const TableInOut = ({
    data
}: Props) => {

    return(
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>

{/* 
                {ResultLeaderTable.map((cur_user_stat, index) => (
                    <>
                        <li key={index}> */}



                <TableBody>
                    {data.map((el, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{el.date }</TableCell>
                            <TableCell>{el.mass}</TableCell>
                            <TableCell>{el.material}</TableCell>
                            <TableCell className="text-right">{el.zakaz}</TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
                </Table>
        </div>
    )
  }