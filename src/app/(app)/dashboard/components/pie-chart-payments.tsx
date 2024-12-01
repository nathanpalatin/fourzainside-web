'use client'

import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart
} from 'recharts'

import { Card, CardContent } from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
const chartData = [{ browser: 'safari', pix: 210, fill: 'var(--color-safari)' }]

const chartConfig = {
	pix: {
		label: 'PIX'
	},
	safari: {
		label: 'Safari',
		color: 'hsl(var(--chart-2))'
	}
} satisfies ChartConfig

export function PieChartPayment() {
	return (
		<Card className="flex flex-col">
			<CardContent className=" pb-0">
				<ChartContainer config={chartConfig} className="w-32 h-[100px]">
					<RadialBarChart
						data={chartData}
						startAngle={0}
						endAngle={200}
						innerRadius={40}
						outerRadius={70}
					>
						<PolarGrid
							gridType="circle"
							radialLines={false}
							stroke="200px"
							polarRadius={[106, 74]}
						/>
						<RadialBar dataKey="pix" background cornerRadius={10} />
						<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="text-xl font-semibold fill-white"
												>
													{chartData[0].pix.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className="fill-muted-foreground"
												>
													PIX
												</tspan>
											</text>
										)
									}
								}}
							/>
						</PolarRadiusAxis>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
