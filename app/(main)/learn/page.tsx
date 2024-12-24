import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { Header } from "./header"
import { UserProgress } from "@/components/user-progress"
// import { getIncOut } from "@/db/queries"
// import { TableInOut } from "@/components/table-inout"
// import { getBetonData } from "../../_lib/readSheet"


 const IncomePage = async () => {

    // const dataSheet = await getBetonData()
    // console.log("dataSheet: ", dataSheet)


    // const data = await getIncOut()

   

    // console.log(data)

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress />
            </StickyWrapper>

            <FeedWrapper>
                <Header title='Бетон'/>

                {/* <TableInOut data={data} /> */}
            </FeedWrapper>
        </div>
    )
 }

 export default IncomePage