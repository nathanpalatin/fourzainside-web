import { CoinsIcon } from 'lucide-react'
import { CardInfo } from '../../components/card-info'

export default function Products() {
	return (
		<div className="mt-4 flex gap-3 items-start">
			<CardInfo title="Vendas hoje" icon={<CoinsIcon />} />
		</div>
	)
}
