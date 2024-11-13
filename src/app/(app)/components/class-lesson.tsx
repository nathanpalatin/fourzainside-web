'use client'

import Image from "next/image"
import { StarHalf, StarIcon } from "lucide-react"
import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

import { VideoPlayerYT } from "./video-yt"
import { ButtonProgress } from "./button-progress"
import { getCourseInfo } from "@/http/get-course"
import { Skeleton } from "@/components/ui/skeleton"
import { getLesson } from "@/http/get-lesson"


export function ClassLesson() {

  const { lesson, slug } = useParams<{ lesson: string, slug: string }>()

  const { data, isLoading } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['lesson', lesson],
    queryFn: () => getLesson(lesson),
  })

  const { data: course, isLoading: isLoadingCourse } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['slug', slug],
    queryFn: () => getCourseInfo(slug)
  })


  return (
    <div className="pl-6 ">
      {isLoading ? (
        <Skeleton className=" bg-zinc-700 h-[600px] w-full rounded-2xl" />
      ) : (
        <VideoPlayerYT cover={data?.lesson.cover} video={data?.lesson.video} />

      )}
      <h1 className="text-2xl font-semibold py-6 ">{data?.lesson.title}</h1>
      <div className='flex gap-3 '>
        {isLoadingCourse ? (
          <Skeleton className='w-14 h-14  rounded-full' />
        ) : (
          <Image alt="mentor profile" className='w-14 h-14 object-cover rounded-full' width={150} height={150} src={course?.course.user.avatar} />

        )}


        <div className='flex-1'>
          <p className='font-semibold text-lg'>{course?.course.user.name}</p>
          <p className='font-medium text-zinc-500 text-sm'>Educadora</p>
          <p className='pt-2'>{data?.lesson.description}</p>
        </div>
        <div>
          <ButtonProgress watch={data?.lesson.watched} />
          <div className='mt-4'>
            <h1 className='text-sm text-zinc-400'>O que voce achou da aula?</h1>
            <div className='flex gap-1 py-3'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalf />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}