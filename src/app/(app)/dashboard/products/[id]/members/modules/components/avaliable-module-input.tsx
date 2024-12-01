'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

export function CalendarAvaliableModule({
	onDateChange
}: {
	onDateChange: (date: Date | null) => void
}) {
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

	function handleDateChange(date: Date | null) {
		setSelectedDate(date)
		onDateChange(date)
	}

	return (
		<div className="space-y-8">
			<div className="flex flex-col">
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={'outline'}
							className={cn(
								'w-[200px] pl-3 text-left font-normal rounded border-zinc-700',
								!selectedDate && 'text-muted-foreground'
							)}
						>
							{selectedDate ? (
								format(selectedDate, 'PP')
							) : (
								<span className="pt-1">Selecione a data</span>
							)}
							<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="bg-zinc-900 border-zinc-800 rounded w-auto p-0"
						align="start"
					>
						<Calendar
							mode="single"
							selected={selectedDate}
							onSelect={handleDateChange}
							disabled={date =>
								date < new Date(new Date().setHours(0, 0, 0, 0))
							}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	)
}
