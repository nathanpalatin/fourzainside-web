import { ChartConfig } from '@/components/ui/chart'

export const chartData = [
	{ month: 'January', viciados: 186, fofos: 80, opa: 421 },
	{ month: 'February', viciados: 305, fofos: 200, opa: 21 },
	{ month: 'March', viciados: 237, fofos: 120, opa: 61 },
	{ month: 'April', viciados: 73, fofos: 190, opa: 32 },
	{ month: 'May', viciados: 209, fofos: 130, opa: 211 },
	{ month: 'June', viciados: 214, fofos: 140, opa: 421 },
	{ month: 'July', viciados: 344, fofos: 140, opa: 21 },
	{ month: 'August', viciados: 514, fofos: 140, opa: 31 },
	{ month: 'September', viciados: 214, fofos: 140, opa: 321 },
	{ month: 'October', viciados: 214, fofos: 140, opa: 42 },
	{ month: 'November', viciados: 237, fofos: 120, opa: 50 },
	{ month: 'December', viciados: 186, fofos: 80, opa: 8 }
]

export const chartConfig = {
	viciados: {
		label: 'Viciados',
		color: 'hsl(var(--chart-1))'
	},
	fofos: {
		label: 'Estudando fofo',
		color: 'hsl(var(--chart-2))'
	},
	opa: {
		label: 'Opa',
		color: 'hsl(var(--chart-3))'
	}
} satisfies ChartConfig
