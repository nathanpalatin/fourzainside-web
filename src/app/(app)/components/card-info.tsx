interface BoxProps {
	title: string
	today: string
	week: string
	yesterday: string
	month: string
}

export function CardInfo({ title, today, week, yesterday, month }: BoxProps) {
	return (
		<div className="border border-zinc-700 bg-zinc-900 rounded-xl">
			<div className="p-6">
				<h1 className="text-sm text-zinc-100 font-semibold">{title}</h1>
				<p className="text-2xl font-bold text-green-600">{today}</p>
				<div className="flex flex-col space-y-3 mt-4">
					<div>
						<h1 className="text-sm text-zinc-400 font-normal">
							Realizadas ontem
						</h1>
						<p className="text-lg font-bold text-green-600">{yesterday}</p>
					</div>

					<div>
						<h1 className="text-sm text-zinc-400 font-normal">
							Total nos últimos 7 dias
						</h1>
						<p className="text-lg font-bold text-green-600">{week}</p>
					</div>
					<div>
						<h1 className="text-sm text-zinc-400 font-normal">
							Total nos últimos 30 dias
						</h1>
						<p className="text-lg font-bold text-green-600">{month}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
