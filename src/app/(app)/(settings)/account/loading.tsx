import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<div className="px-6 pt-4 pb-14">
			<div className="flex justify-between gap-4">
				<div className="w-3/12">
					<Skeleton className="w-full h-52 bg-zinc-400 rounded" />
				</div>
				<div className="w-9/12">
					<Skeleton className="w-full h-screen bg-zinc-400 rounded" />
				</div>
			</div>
		</div>
	)
}
