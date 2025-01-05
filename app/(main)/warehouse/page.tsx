import { FeedWrapper } from "@/components/feed-wrapper"
import { Header } from "@/components/header"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"
// import { getIncOut } from "@/db/queries"
// import { TableInOut } from "@/components/table-inout"
// import { getWeightsData } from "../../_lib/readSheet"


 const WarehousePage = async () => {

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress />
            </StickyWrapper>

            <FeedWrapper>
                <Header title='Склад' iconSrc='/warehouse.svg'/>
            </FeedWrapper>
        </div>
    )
 }

 export default WarehousePage