import { Progress } from '@/components/ui/progress'
import { Medal } from 'lucide-react'

export function ProgressLevel() {
	return (
		<div className="ml-10 flex flex-col gap-2">
			<h1 className="text-xs items-start flex gap-1">
				<Medal size={13} />
				Seu avanço - R$ 9.000,09 em vendas
			</h1>
			<Progress
				className="h-1 rounded-none w-[100px] bg-zinc-700 to-green-800 from-green-600"
				value={87}
			/>
			<h1 className="text-sm">Nível 1 - 0 {'>'} 10k</h1>
		</div>
	)
}
