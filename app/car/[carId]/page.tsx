import { getCars, getClients, getWorks } from "@/db/queries"
import { MobileHeader } from "@/components/mobile-header"
import { Cake, Calendar1, CalendarCheck, Code, Gauge, LucideScanBarcode, MapPin, Phone, Send, Sidebar, User, VenetianMask, Wrench } from "lucide-react"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"
import { FeedWrapper } from "@/components/feed-wrapper"
import { Header } from "@/components/header"
import { carsBrandToSvgPath } from "@/usefulFunction"


type Params = Promise<{ carId: number }>

// export default async function GPSFix(props: { params: Params }) {
//   const params = await props.params;
//   const rcdId = params.rcdId;
// }


// type Props = {
//     params: {
//         carId: number
//     }
// }

// const CarIdPage =  async ({
//     params, 
// }: Props) => {

const CarIdPage =  async (props: { params: Params }) => {

    


        const [
        AllCars,
        AllClients,
        AllWorks,
    ] = await Promise.all([
        getCars(),
        getClients(),
        getWorks(),
    ])



    if (!AllCars) {
		throw new Error('Нет машин!');
	}
    if (!AllClients) {
		throw new Error('Нет клиентов!');
	}
    // if (!AllWorks) {
	// 	throw new Error('Нет работ!');
	// }



    const params = await props.params



    const currentCar = AllCars.filter(car => String(car.id) === String(params.carId))[0]
    const currentClient = AllClients.filter(client => String(client.id) === String(currentCar.clientId))[0]
    const currentWorks = AllWorks.filter(works => String(works.carId) === String(String(params.carId)))




    console.log(currentCar)

    // console.log('-----in [] ----')
    // console.log({params})
    return(

        <>
        <MobileHeader />
        <Sidebar className="hidden lg:flex" />
        <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
            <div className="max-w-[1056px] mx-auto pt-6 h-full">
                


                <div className="flex flex-row-reverse gap-[48px] px-6">
                
                    <StickyWrapper>
                        <UserProgress />
                    </StickyWrapper>

                    {currentCar && currentClient  &&


                        <FeedWrapper>
                            
                            {/* <Header title={currentCar == undefined ? 'no car': currentCar.model} iconSrc={carsBrandToSvgPath(currentCar.brand)}/> */}
                            <Header title={currentCar.model} iconSrc={carsBrandToSvgPath(currentCar.brand)}/>
                            {/* <ClientBanner title={currentClient.address} description={currentClient.fullName} /> */}
                        

                            <div className="w-full rounded-xl  bg-blue-400 p-5 text-white flex items-center justify-between">

                                <div className="flex flex-1 items-center justify-between">

                                    <div className="space-y-2.5">

                                        <h3 className="flex flex-1 gap-2">
                                            <Gauge className="h-6 w-6"/>
                                            {currentCar.odometer}
                                            км
                                        </h3>

                                        <h3 className="flex flex-1 gap-2">
                                            <Calendar1 className="h-6 w-6"/>
                                            {currentCar.yearProduction}
                                            
                                        </h3>

                                        <h3 className="flex flex-1 gap-2">
                                            <LucideScanBarcode className="h-6 w-6"/>
                                            {currentCar.vin}
                                        </h3>



                                    </div>       

                                </div>

                            </div> 






                            <div className="w-full rounded-xl border-2 border-spacing-2 border-gray-400 flex items-center justify-between mt-5 mb-10">



                                <div className="space-y-2.5 m-4">

                                    <h3 className="flex flex-1 gap-2 text-xs text-gray-500">
                                        <User className="h-6 w-6 text-gray-500"/>
                                        {currentClient.fullName}
                                    </h3>

                                    <h3 className="flex flex-1 gap-2 text-xs text-gray-500">
                                        <VenetianMask className="h-6 w-6 text-gray-500"/>
                                        {currentClient.description}
                                    </h3>

                                    <h3 className="flex flex-1 gap-2 text-xs text-gray-500">
                                        <Cake className="h-6 w-6 text-gray-500"/>
                                        {currentClient.dateBirth}
                                    </h3>


                                </div>  



                                <div className="space-y-2.5 m-4">
                                    <h3 className="flex flex-1 gap-2 text-xs text-gray-500">
                                        <Phone className="h-6 w-6 text-gray-500"/>
                                        {currentClient.phone}
                                    </h3>

                                    <h3 className="flex flex-1 gap-2 text-xs text-gray-500">
                                        <Send className="h-6 w-6 text-gray-500"/>
                                        {currentClient.telegram}
                                    </h3>
                                    <h3 className="flex flex-1 gap-2 text-xs text-gray-500">
                                        <MapPin className="h-6 w-6 text-gray-500"/>
                                        {currentClient.address}
                                    </h3>
                                </div>

                            </div>


                        <p className="pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">Проведённые работы:</p>

                        {currentWorks.length > 0 &&
                        

                            currentWorks.map(work => (
                                <div key={work.id} className="w-full rounded-xl border-2  border-gray-700 items-center mt-5 mb-10">
                                    


                                    <div className="space-y-2.5 m-4">
                                    

                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            <Code className="h-6 w-6 text-gray-500"/>
                                            Код работы: {JSON.stringify(work.id)}
                                        </h3>


                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            <CalendarCheck className="h-6 w-6 text-gray-500"/>
                                            {JSON.stringify(work.dateDone)}
                                        </h3>


                                        <h3 className="flex flex-1 gap-2 text-sm text-gray-500">
                                            <Wrench className="h-6 w-6 text-gray-500"/>
                                            {work.workDone}
                                        </h3>

                                    </div>
                                
                                </div>

                            ))

                        
                        }
                        





                        </FeedWrapper>
                    }


                </div> 



            </div>
        </main>
    </>

    )
}

export default CarIdPage