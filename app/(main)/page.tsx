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


    if (!AllCars) {
        throw new Error('Нет машин!');
    }
    if (!AllWorks) {
        throw new Error('Нет работ!');
    }
    if (!AllClients) {
        throw new Error('Нет клиентов!');
    }
    
    


    const noFilterAllWorksInfo = AllWorks.map(works => {
        const filteredCars = AllCars.filter(car => car.id === works.carId)[0]
        const filteredClients = AllClients.filter(client => client.id === filteredCars.clientId)[0]
        return ({
            id: works.id,
            dateDone: works.dateDone || '',
            odometerWas: works.odometerWas || '',
            workDone: works.workDone|| '',
            brand: filteredCars.brand|| '',
            model: filteredCars.model|| '',
            vin: filteredCars.vin || '',
            yearProduction: filteredCars.yearProduction|| '',
            number: filteredCars.number || '',
            clientFullName: filteredClients.fullName|| '',
            description: filteredClients.description|| '',
            phone: filteredClients.phone|| '',
            imageUrl: works.imageUrl|| '',
        })
    })


    const allWorksInfo = noFilterAllWorksInfo


    // .filter(
    //     el => el.number?.toLocaleLowerCase().includes(searchCar.toLocaleLowerCase())
    //     || el.brand?.toLowerCase().includes(searchCar.toLocaleLowerCase())
    //     || el.model?.toLowerCase().includes(searchCar.toLocaleLowerCase())
    // )




    // const mixers = carsObject.filter(el => el.type.toUpperCase()== 'М')




    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress />
            </StickyWrapper>

            <FeedWrapper>
                <Header title='Все работы' iconSrc='/allworks.svg'/>

                {/* <TableAllWorks AllCars={AllCars} AllWorks={AllWorks} AllClients={AllClients}/> */}
                <TableAllWorks allWorksInfo={allWorksInfo}/>




            </FeedWrapper>
        </div>
    )
 }

 export default AllWorksPage