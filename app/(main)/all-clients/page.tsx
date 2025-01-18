import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"
import { Header } from "@/components/header"
import { getCars, getClients } from "@/db/queries"
import { TableClients } from "@/components/table-clients"


 const HomePage = async () => {

    const [
        AllCars,
        AllClients,
    ] = await Promise.all([
        getCars(),
        getClients(),
    ])


    // const AllCars = await getCars()
    // const AllClients = await getClients()

    if (!AllCars) {
		throw new Error('Нет машин!');
	}
    if (!AllClients) {
		throw new Error('Нет клиентов!');
	}


    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
           
           <StickyWrapper>
                <UserProgress />
            </StickyWrapper>

            <FeedWrapper>
                <Header title='Все клиенты' iconSrc='/clients.svg'/>
                <TableClients AllCars={AllCars}  AllClients={AllClients}/>    
            </FeedWrapper>

        </div>
    )
 }

 export default HomePage