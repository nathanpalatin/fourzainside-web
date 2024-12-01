import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<div>
			<div className="grid grid-cols-3 gap-3 mb-3">
				<div className="space-y-0">
					<Skeleton className="w-full h-[400px] rounded-xl bg-zinc-700" />
				</div>
				<div className="space-y-2">
					<Skeleton className="w-full h-32 rounded-xl bg-zinc-700" />
					<Skeleton className="w-full h-32 rounded-xl bg-zinc-700" />
					<Skeleton className="w-full h-32 rounded-xl bg-zinc-700" />
				</div>
				<div className="space-y-2">
					<Skeleton className="w-full h-40 rounded-xl bg-zinc-700" />
					<Skeleton className="w-full h-40 rounded-xl bg-zinc-700" />
				</div>
			</div>
			<Skeleton className="w-full h-[200px] rounded-xl bg-zinc-700" />
		</div>
	)
}
