'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/components/ui/chart'

export function ChartWave({ chartConfig, chartData, width }) {
	return (
		<ChartContainer config={chartConfig}>
			<AreaChart accessibilityLayer width={width} height={100} data={chartData}>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent indicator="dot" />}
				/>
				<CartesianGrid
					strokeDasharray="2 2"
					stroke="#FFFFFF30"
					vertical={false}
				/>
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
					tickFormatter={value => value.slice(0, 3)}
				/>
				<Area
					type="monotone"
					dataKey="viciados"
					stroke="hsl(var(--chart-1))"
					fill="hsl(var(--chart-1))"
				/>

				<Area
					type="monotone"
					dataKey="fofos"
					stroke="hsl(var(--chart-2))"
					fill="hsl(var(--chart-2))"
				/>
			</AreaChart>
		</ChartContainer>
	)
}
