interface BoxProps {
	title: string
	today: string
	note?: boolean
}

export function CardInfoSmall({ title, today, note = false }: BoxProps) {
	return (
		<div
			className={`border border-zinc-700 bg-zinc-900 rounded-xl ${
				note && 'h-32'
			}`}
		>
			<div className="p-4">
				<h1 className="text-sm text-zinc-100 font-semibold">{title}</h1>
				<p className="text-2xl font-bold text-green-600">{today}</p>
			</div>
		</div>
	)
}
