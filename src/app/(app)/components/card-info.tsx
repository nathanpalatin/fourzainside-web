import { ArrowUp01Icon } from 'lucide-react'
import type { ReactNode } from 'react'

interface BoxProps {
	title: string
	icon: ReactNode
}

export function CardInfo({ title, icon }: BoxProps) {
	return (
		<div className="border border-zinc-700 bg-zinc-900 rounded">
			<div className="px-6 py-4">
				<div className="flex justify-between items-center">
					<p className="text-xs  text-zinc-400">{title}</p>
					{icon}
				</div>
				<h1 className="text-2xl font-bold">R$ 1.451,42</h1>
				<p className="text-xs font-bold flex gap-1">
					<span className="text-green-600 flex items-center gap-px">
						<ArrowUp01Icon size={12} /> +3%
					</span>{' '}
					em relação ao mes passado
				</p>
			</div>
		</div>
	)
}
