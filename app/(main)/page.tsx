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
    

    const allCarNums = [...new Set(AllCars.map(item => item.number))];



    // Машины с УЖЕ имеющимися РАБОТАМИ
    //
    const noFilterAllWorksInfo = AllWorks.map(works => {
        const filteredCars = AllCars.filter(car => car.id === works.carId)[0]
        const filteredClients = AllClients.filter(client => client.id === filteredCars.clientId)[0]
        return ({
            id: works.id,
            dateDone: works.dateDone || '',
            odometerWas: works.odometerWas || '',
            workDone: works.workDone|| '',
            imageUrl: works.imageUrl|| '',
            carId: filteredCars.id || 0,
            brand: filteredCars.brand|| '',
            model: filteredCars.model|| '',
            vin: filteredCars.vin || '',
            yearProduction: filteredCars.yearProduction|| '',
            number: filteredCars.number || '',
            clientFullName: filteredClients.fullName|| '',
            description: filteredClients.description|| '',
            phone: filteredClients.phone|| '',
        })
    })



    // Ищим машины БЕЗ РАБОТ
    //
    let carsNoWorks = AllCars.map(car => {
        // смотрим есть ли эта машина в Works
        const isInWork = AllWorks.filter(works => works.carId == car.id)

        if (isInWork.length == 0) {
            return car
        }
    })
    carsNoWorks = carsNoWorks.filter(function( element ) {
        return element !== undefined;
     });
       
    const noWorksFilter = carsNoWorks.map(car => {
        return ({
            id: 0,
            dateDone: new Date(),
            odometerWas: '',
            workDone: '',
            imageUrl: '',
            carId: car?.id || 0,
            brand: car?.brand || '',
            model: car?.model || '',
            vin: car?.vin || '',
            yearProduction: car?.yearProduction || '',
            number: car?.number || '',
            clientFullName: AllClients.filter(el => el.id == car?.clientId)[0].fullName || '',
            description: AllClients.filter(el => el.id == car?.clientId)[0].description || '',
            phone: AllClients.filter(el => el.id == car?.clientId)[0].phone || '',
        })
    })



    const allWorksInfo = noFilterAllWorksInfo



    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress />
            </StickyWrapper>

            <FeedWrapper>
                <Header title='Все работы' iconSrc='/allworks.svg'/>

                <TableAllWorks 
                    allWorksInfo={allWorksInfo} 
                    allCarNums={allCarNums} 
                    carsNoWorks={carsNoWorks}
                    noWorksFilter={noWorksFilter}
                />


            </FeedWrapper>
        </div>
    )
 }

 export default AllWorksPage