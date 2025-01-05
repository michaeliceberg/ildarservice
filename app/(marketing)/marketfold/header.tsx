import Image from "next/image"

export const Header = () => {
    return (
        <div className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">   
                    <Image
                        src='/iservice.svg'
                        height={40}
                        width={40}
                        alt='mascot'/>
                    <h1 className="text-2xl font-extrabold text-blue-400 tracking-wide">
                        ildarService
                    </h1>
                </div>
            </div>
        </div>
    )
}