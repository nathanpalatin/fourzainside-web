'use client'

import { StarIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { VideoPlayerYT } from './video-yt'

import { Skeleton } from '@/components/ui/skeleton'

import { getCourseInfo } from '@/http/get-course'
import { getLesson } from '@/http/get-lesson'
import { ButtonProgress } from './button-progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function ClassLesson() {
	const { lesson, slug } = useParams<{ lesson: string; slug: string }>()

	const { data, isLoading } = useQuery({
		refetchOnWindowFocus: false,
		queryKey: ['lesson', lesson],
		queryFn: () => getLesson(lesson)
	})

	const { data: course, isLoading: isLoadingCourse } = useQuery({
		refetchOnWindowFocus: false,
		queryKey: ['slug', slug],
		queryFn: () => getCourseInfo(slug)
	})

	return (
		<div className="pl-6">
			{isLoading ? (
				<Skeleton className="bg-zinc-700 h-[600px] w-full rounded-2xl" />
			) : (
				<VideoPlayerYT video={data?.lesson.video} />
			)}
			<h1 className="text-2xl font-semibold py-6">{data?.lesson.title}</h1>
			<div className="flex gap-3">
				{isLoadingCourse ? (
					<Skeleton className="size-14 bg-zinc-700 rounded-full" />
				) : (
					<Avatar className="size-14">
						<AvatarImage
							src={`https://pub-bb90bc58e6e242419ef6a85b289daef5.r2.dev/${course?.course.user.avatar}`}
						/>
						<AvatarFallback>{course?.course.user.name}</AvatarFallback>
					</Avatar>
				)}
				<div className="flex-1">
					<p className="font-semibold text-lg">{course?.course.user.name}</p>
					<p className="font-medium text-zinc-500 text-sm">Educadora</p>
					<p className="pt-2 text-sm pr-20">{data?.lesson.description}</p>
				</div>
				<div className="mt-1">
					<ButtonProgress
						watch={data?.lesson.watched}
						lessonId={data?.lesson.id}
					/>
					<h1 className="text-xs text-right text-zinc-400">
						O que voce achou da aula?
					</h1>
					<div className="flex justify-end gap-3 py-2">
						<StarIcon size={20} />
						<StarIcon size={20} />
						<StarIcon size={20} />
						<StarIcon size={20} />
						<StarIcon size={20} />
					</div>
				</div>
			</div>
		</div>
	)
}
