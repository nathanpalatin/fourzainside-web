import { getCourses } from '@/http/get-courses'
import { CardLastLesson } from './components/card-last-lesson'

export default async function Home() {

	const { courses } = await getCourses()

	return (
		<div className="space-y-4 py-4 px-6">
			<div className="flex items-start justify-between gap-4">
				<div className="w-8/12 flex flex-col gap-4 ">
					<h1 className=" text-sm font-semibold">Continuar de onde parou</h1>
					<div className='flex gap-4 overflow-x-hidden'>
						<CardLastLesson link={courses.slug} course={courses.title} instructorName={courses.level} instructorAvatar={courses.image} />
					</div>
				</div>
				<div className="w-3/12 gap-5 flex flex-col">
					<div className=" bg-zinc-200 dark:bg-zinc-900  ">
					</div>
				</div>
			</div>
		</div>
	)
}
