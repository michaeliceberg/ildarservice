'use client'
// import { courses } from '@/db/schema';
import Link from '@/node_modules/next/link';
import { Button } from './ui/button';
// import LottieCoins from '@/public/Lottie/LottieCoins.json'
// import LottieGems from '@/public/Lottie/LottieGems.json'


// type Props = {};
// export const UserProgress = ({ }: Props) => {
export const UserProgress = () => {
		return (
		<div className='flex items-center justify-between gap-x-2 w-full'>
			<Link href='/income'>
				<Button variant='ghost'>
					1
				</Button>
			</Link>

			<Link href='/income'>
				<Button variant='ghost'>
					2
				</Button>
			</Link>


	
		</div>
	);
};
