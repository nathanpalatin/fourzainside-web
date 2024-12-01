import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<div className="grid grid-cols-3 gap-3 mt-10 mb-3">
			<Skeleton className="w-full h-32 rounded-xl bg-zinc-800" />
			<Skeleton className="w-full h-32 rounded-xl bg-zinc-800" />
			<Skeleton className="w-full h-32 rounded-xl bg-zinc-800" />
		</div>
	)
}
