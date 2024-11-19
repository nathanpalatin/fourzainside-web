'use client'
import { useMemo } from 'react'
import { TrendingUp } from 'lucide-react'
import { Cell, Label, Pie, PieChart, Tooltip } from 'recharts'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { ChartContainer } from '@/components/ui/chart'

export function ChartRounded({ chartData, chartConfig }) {
	const validChartData = useMemo(() => {
		return Array.isArray(chartData) && chartData.length > 0
			? chartData.filter(
					item => typeof item.visitors === 'number' && item.visitors > 0
			  )
			: []
	}, [chartData])

	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Visitantes</CardTitle>
				<CardDescription>Janeiro - Dezembro 2024</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto w-[300px] h-[300px]"
				>
					<PieChart width={300} height={300}>
						<Pie
							data={validChartData}
							dataKey="visitors"
							nameKey="browser"
							cx={150} // ou "50%"
							cy={150} // ou "50%"
							innerRadius={70}
							outerRadius={120}
							stroke="#ffffff"
							strokeWidth={2}
						>
							{validChartData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.fill} />
							))}

							<Label
								content={({ cx, cy }) => {
									if (!cx || !cy || !validChartData.length) return null

									const totalVisitors = validChartData.reduce(
										(acc, item) => acc + item.visitors,
										0
									)

									return (
										<text
											x={cx}
											y={cy}
											textAnchor="middle"
											dominantBaseline="middle"
										>
											<tspan className="fill-foreground text-3xl font-bold">
												{totalVisitors}
											</tspan>
											<tspan
												x={cx}
												y={cy + 24}
												className="fill-muted-foreground"
											>
												Visitors
											</tspan>
										</text>
									)
								}}
							/>
						</Pie>
						<Tooltip />
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 font-medium leading-none">
					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Showing total visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	)
}
