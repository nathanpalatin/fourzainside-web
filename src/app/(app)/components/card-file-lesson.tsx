import { DownloadIcon, FileBoxIcon } from 'lucide-react'

interface CardLessonProps {
	title: string
	type: string
}

export function CardFileLesson({ title, type }: CardLessonProps) {
	return (
		<div className="border mb-3 border-zinc-800 rounded">
			<div className="py-2 px-4">
				<div className="flex gap-2 items-center justify-between">
					<FileBoxIcon />
					<div className="flex-1 flex-col leading-5">
						<p>{title}</p>
						<span className="font-normal text-zinc-400 text-xs">
							{type} - 74KB
						</span>
					</div>
					<DownloadIcon size={16} />
				</div>
			</div>
		</div>
	)
}
