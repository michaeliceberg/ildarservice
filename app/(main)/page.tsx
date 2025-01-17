import { FeedWrapper } from "@/components/feed-wrapper"
import { Header } from "@/components/header"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"
import { getCars, getClients, getWorks } from "@/db/queries"
import TableAllWorks from "./table-all-works"


 const AllWorksPage = async () => {

    const [
        AllCars,
        AllWorks,
        AllClients,
    ] = await Promise.all([
        getCars(),
        getWorks(),
        getClients(),
    ])


    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress />
            </StickyWrapper>

            <FeedWrapper>
                <Header title='Все работы' iconSrc='/allworks.svg'/>
                <TableAllWorks AllCars={AllCars} AllWorks={AllWorks} AllClients={AllClients}/>
            </FeedWrapper>
        </div>
    )
 }

 export default AllWorksPage