import { FeedWrapper } from "@/components/feed-wrapper"
import { Header } from "@/components/header"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"
// import { getIncOut } from "@/db/queries"
// import { TableInOut } from "@/components/table-inout"
// import { getWeightsData } from "../../_lib/readSheet"


 const ExpensesPage = async () => {

    // const dataSheet = await getWeightsData()
    // console.log("dataSheet: ", dataSheet)


    // const data = await getIncOut()

   

    // console.log(data)

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress />
            </StickyWrapper>

            <FeedWrapper>
                <Header title='Расход материала'/>

                {/* <TableInOut data={data} /> */}
            </FeedWrapper>
        </div>
    )
 }

 export default ExpensesPage