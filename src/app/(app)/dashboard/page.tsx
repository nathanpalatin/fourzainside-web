import { EyeIcon } from 'lucide-react'
import { CardInfo } from '../components/card-info'
import Image from 'next/image'

import bgGrid from '@/assets/header-thumb.png'

export default function Dashboard() {
	return (
		<div className="overflow-y-auto w-full pr-2">
			<Image
				alt=""
				className="absolute right-10 top-0 object-cover"
				src={bgGrid}
				width={600}
				height={300}
			/>
			<h1 className="flex text-lg items-start gap-3 font-semibold">
				QUADRO GERAL <EyeIcon fill="black" color="white" />
			</h1>
			<div className="w-full mt-4 grid grid-cols-1 lg:grid-cols-4 gap-2 items-center">
				<CardInfo
					today="R$ 2.529,71"
					yesterday="R$ 2.529,71"
					week="R$ 8.421,81"
					month="R$ 9.653,76"
					title="Vendas realizadas hoje"
				/>
			</div>
		</div>
	)
}
