import { CoinsIcon } from 'lucide-react'
import { CardInfo } from '../components/card-info'
import { ChartWave } from '@/components/chart-wave'
import { chartConfig, chartData } from './actions/students-charts'
import {
	chartConfig as chart2,
	chartData as chartdata2
} from './actions/students-charts'
import { ChartRounded } from '@/components/pie-chart'

export default function Dashboard() {
	return (
		<div className="overflow-y-auto w-full pr-2">
			<div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
				<CardInfo title="Vendas hoje" icon={<CoinsIcon />} />
				<CardInfo title="Saldo disponível" icon={<CoinsIcon />} />
				<CardInfo title="Pendente" icon={<CoinsIcon />} />
				<CardInfo title="Pendente" icon={<CoinsIcon />} />
			</div>
			<div className="w-full mt-2 border border-zinc-800">
				<div className="p-3">
					<h1 className="mb-10 text-2xl font-semibold">
						Desempenho dos alunos
					</h1>
					<ChartWave
						width={800}
						chartConfig={chartConfig}
						chartData={chartData}
					/>
					<ChartRounded chartConfig={chart2} chartData={chartdata2} />
				</div>
			</div>
		</div>
	)
}
