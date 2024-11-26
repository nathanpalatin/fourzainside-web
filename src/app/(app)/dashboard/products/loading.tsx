import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<div className="grid grid-cols-3 gap-3">
			<Skeleton className="w-full h-32 rounded-xl bg-zinc-700" />
			<Skeleton className="w-full h-32 rounded-xl bg-zinc-700" />
			<Skeleton className="w-full h-32 rounded-xl bg-zinc-700" />
		</div>
	)
}
