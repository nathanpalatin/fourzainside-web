import { BadgeDollarSignIcon } from 'lucide-react'
import { Skeleton } from './ui/skeleton'

export function LoadingBalanceBadge() {
	return (
		<Skeleton className="space-y-2 bg-zinc-900 rounded-xl px-10 py-4">
			<Skeleton className="w-8 h-8 bg-zinc-400 rounded-full" />
			<Skeleton className="w-72 h-9 bg-zinc-400 rounded" />
			<Skeleton className="w-24 h-4 bg-zinc-400 rounded" />
		</Skeleton>
	)
}
