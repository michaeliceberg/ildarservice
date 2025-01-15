import { cn } from '@/lib/utils'
import Link from '@/node_modules/next/link'
// import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
// import { Loader } from 'lucide-react'
import Image from 'next/image'
import { SidebarItem } from './sidebar-item'
// import { SidebarItem } from './sidebar-item'

type Props = {
	className?: string
}

export const Sidebar = ({ className }: Props) => {
	return (
		<div className={cn('flex  h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col', className)}>
			<Link href='/income'>
				<div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
					<Image src='/iservice.svg' height={40} width={40} alt='Iceberg' />
					<h1 className='text-2xl font-extrabold text-blue-400 tracking-wide'>ildarGarage</h1>
				</div>
			</Link>
			<div className='flex flex-col gap-y-2 flex-1'>
				
			<SidebarItem label='Клиенты' href='/' iconSrc='/clients.svg' />

			<SidebarItem label='Все работы' href='/allworks' iconSrc='/allworks.svg' />

			<SidebarItem label='Склад' href='/warehouse' iconSrc='/warehouse.svg' />

			</div>
			<div className='p-4'>
				
			</div>
		</div>
	)
}
