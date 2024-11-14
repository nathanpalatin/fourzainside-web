interface CardLessonProps {
	module: string
	title: string
	lessons: number
	totalTime: string
}

export function CardLesson({ title, lessons, totalTime, module }: CardLessonProps) {
	return (
		<div className=" border-zinc-800 w-full rounded">
			<div className="flex gap-3 justify-between ">
				<div className="border border-green-600 bg-green-700 flex justify-center items-center rounded-full p-3 size-4">
					<h1 className="text-xs ">{module}</h1>
				</div>

				<div className="flex-1 flex-col w-full text-left leading-5">
					<p className="text-sm font-light">{title}</p>
					<div className="flex items-center gap-2">
						<span className="font-normal text-zinc-400 text-xs">{lessons} aulas</span>
						<span className="flex flex-shrink-0 size-1 rounded-full bg-gray-500"></span>
						<span className="font-normal text-zinc-400 text-xs">{totalTime}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
