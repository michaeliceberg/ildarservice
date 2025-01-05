import { Button } from '@/components/ui/button'
import Link from '@/node_modules/next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

type Props = {
	title: string | null,
	iconSrc: string
}

export const Header = ({ title, iconSrc }: Props) => {
	return (
		<div className='sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50'>
			<Link href='/'>
				<Button variant='ghost' size='sm'>
					<ArrowLeft className='h-5 w-5 stroke-2 text-neutral-400' />
				</Button>
			</Link>
			<div className='flex flex-1 justify-center'>
				<Image src={iconSrc} alt={title || iconSrc} className='mr-5' height={32} width={32} />
				<h1 className='font-bold text-lg'>{title}</h1>
			</div>
			<div />
		</div>
	)
}
