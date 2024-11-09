import { CoinsIcon } from 'lucide-react'
import { CardInfo } from '../components/card-info'

export default function Dashboard() {
	return (
		<div className='overflow-y-auto'>
			<div className='w-full mt-4 flex gap-3 items-center'>
				<CardInfo title="Vendas hoje" icon={<CoinsIcon />} />
				<CardInfo title="Saldo disponível" icon={<CoinsIcon />} />
				<CardInfo title="Pendente" icon={<CoinsIcon />} />
				<CardInfo title="VENDAS" icon={<CoinsIcon />} />
			</div>


		</div>
	)
}
