// import { useRecipeModal } from "@/app/store/use-exit-modal"
import { getBetonData } from "@/app/_lib/readSheet"
import { useRecipeModal } from "@/app/store/use-exit-modal"
import { FeedWrapper } from "@/components/feed-wrapper"
import { Header } from "@/components/header"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { TableBeton } from "@/components/table-beton"
import { ReplaceBeton } from "@/components/table-weights"
// import { ReplaceDate } from "@/components/table-inout"

import { UserProgress } from "@/components/user-progress"
// import { getIncOut } from "@/db/queries"
// import { TableInOut } from "@/components/table-inout"
// import { getBetonData } from "../../_lib/readSheet"


 const BetonPage = async () => {

  

    // const {open} = useRecipeModal()

  // const beton = await getBetonData()

  //   if (!beton) {
  //     throw new Error('Нет бетона!');
  // }
    // console.log("beton: ", beton)

    const beton = [
        [
          'Бетон',
          '',
          '',
          '',
          '',
          '',
          '26.12.2024 1:30:27',
          '',
          '',
          '',
          'ЕСЛИ(T6="";"";(T6-ДАТА(1970;1;1))*86400-3*60*60)'
        ],
        [ 'с 19:00 25 дек. до 19:00 01:30 26 дек.' ],
        [ 'отдали ✅', '', '', '0 кубов' ],
        [ 'Обновлено: ', '26.12.2024 1:30:27' ],
        [
          'Посл. машина',
          'Вып',
          '/',
          'Заяв',
          'Контрагент',
          '',
          'Маш',
          'Рецепт',
          'Гос.Номера всех Машин',
          '',
          'сумма контроль'
        ],
        [
          '25.12.2024 15:04:58',
          '13',
          '/',
          '13',
          'Строительная Компания ООО',
          'Щ',
          '2',
          'БСТВ25П4F150W6награвииС/Д',
          'р280ке750   е687ас790                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
          'Заказ покупателя айс00004549',
          '0'
        ],
        [
          '25.12.2024 13:56:52',
          '2',
          '/',
          '2',
          'Гридасов П.С.',
          'Щ',
          '1',
          'БСТВ22.5П4F150W4награвииС/Д',
          'м473ау790                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
          'Заказ покупателя айс00004548',
          '0'
        ],
        [
          '25.12.2024 13:54:01',
          '38',
          '/',
          '38',
          'ББГ',
          'Щ',
          '4',
          'БСТВ25П4F200W8покп№115награвииС/Д',
          'е687ас790   р280ке750   м473ау790   е687ас790                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ',
          'Заказ покупателя айс00004546',
          '0'
        ]
      ]
 

    // const ddd = '26.12.2024 9:22:50'
    // const newDD = ReplaceDate(ddd)
    // console.log(newDD)

 
    const sumBeton = beton[2][3]
    const dateUpdate = beton[3][1]
    
    const betonSliсe = beton.slice(5,)

    betonSliсe.map(el => console.log(ReplaceBeton(el[7])))
    // console.log(betonSliсe)

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress />
            </StickyWrapper>

            <FeedWrapper>
                <Header title='Бетон'/>

                <TableBeton beton={betonSliсe} city='Щёлково'/>
            </FeedWrapper>
        </div>
    )
 }

 export default BetonPage