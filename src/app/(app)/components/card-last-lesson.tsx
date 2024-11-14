import { PlayIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
	link: string
	course: string
	instructorName: string
	instructorAvatar: string
}

export function CardLastLesson({ course, link, instructorName, instructorAvatar }: CardProps) {
	return (
		<Link href={`/classroom/${link}`}>
			<div className="relative border border-zinc-800 rounded bg-zinc-900 w-[350px] hover:border-indigo-700 transition-all h-28 group cursor-pointer overflow-hidden">
				<div className="p-4 flex items-start">
					<div className="flex flex-1 items-start gap-3">
						<Image
							alt={instructorName}
							className="bg-zinc-700 rounded-3xl border border-zinc-600 size-20"
							src={instructorAvatar}
							width={100}
							height={100}
						/>
						<div className="flex-1 flex-col mt-2 gap-px p-2">
							<h1 className="text-zinc-200 font-medium">{course}</h1>
							<span className="text-zinc-400 text-sm">{instructorName}</span>
						</div>
					</div>
					<PlayIcon className="bg-indigo-500 size-12 mt-4 rounded-full p-3 hidden group-hover:flex  transition-all " />
				</div>
				<div className="absolute bottom-0 left-0 w-full">
					<div className="h-1 absolute w-52 bg-indigo-600 z-20 rounded-none" />
					<div className="h-1 w-full bg-zinc-700 z-10 rounded" />
				</div>
			</div>
		</Link>
	)
}
