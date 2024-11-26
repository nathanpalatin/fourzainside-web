interface BoxProps {
	title: string
	today: string
	note?: boolean
	icon?: React.ReactNode
}

export function CardInfoSmall({
	title,
	today,
	note = false,
	icon = false
}: BoxProps) {
	return (
		<div
			className={`border border-zinc-700 bg-zinc-900 rounded-xl ${
				note && 'h-36'
			}`}
		>
			<div className="p-4">
				<h1 className="text-sm inline-flex gap-2 text-zinc-100 font-semibold">
					{title} {icon}
				</h1>
				<p className="text-2xl font-bold text-green-600">{today}</p>
			</div>
		</div>
	)
}
