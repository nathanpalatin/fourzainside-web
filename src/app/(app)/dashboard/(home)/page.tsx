import { Crown, EyeIcon } from 'lucide-react'
import { CardInfo } from '../../components/card-info'
import { ChartDashboard } from '../../components/chart-dashboard'
import { CardInfoSmall } from '../../components/card-info-small'
import { PieChartSales } from '../components/pie-chart-sales'

export default async function Dashboard() {
	return (
		<div className="overflow-y-auto">
			<h1 className="flex text-lg items-start gap-3 font-semibold">
				QUADRO GERAL <EyeIcon fill="black" color="white" />
			</h1>
			<div className="w-full mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
				<CardInfo
					today="R$ 2.529,71"
					yesterday="R$ 2.529,71"
					week="R$ 8.421,81"
					month="R$ 9.653,76"
					title="Vendas realizadas hoje"
				/>
				<div className="flex flex-col gap-2">
					<CardInfoSmall
						today="R$ 2.529,71"
						title="Saldo disponível em carteira"
					/>
					<CardInfoSmall today="R$ 2.529,71" title="Valor pendente" />
					<CardInfoSmall
						today="R$ 2.529,71"
						icon={<Crown className="size-4 text-zinc-400" />}
						title={`Gerados para o Reino`}
					/>
				</div>
				<div className="flex flex-col gap-2 border-l border-zinc-700 pl-4">
					<CardInfoSmall note today="" title="Conversões dos pagamentos" />
					<CardInfoSmall note today="" title="Status das vendas">
						<PieChartSales />
					</CardInfoSmall>
				</div>
			</div>

			<h1 className="flex text-lg mt-4 font-semibold">
				GRÁFICO DE FATURAMENTO
			</h1>
			<div className="w-full border border-zinc-700 rounded-xl min-h-32">
				<ChartDashboard />
			</div>
		</div>
	)
}
