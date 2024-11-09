'use client'

import Image from "next/image"
import { videoJsOptions, VideoPlayerYT } from "./video-yt"
import { ButtonProgress } from "./button-progress"
import { StarHalf, StarIcon } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { getCourseInfo } from "@/http/get-course"
import { Skeleton } from "@/components/ui/skeleton"

interface CourseProps {
  slug: string
}

export function ClassLesson({ slug }: CourseProps) {

  const { data, isLoading } = useQuery({
    queryKey: ['course'],
    queryFn: () => getCourseInfo(slug)
  })


  return (
    <>
      {!isLoading && <VideoPlayerYT options={videoJsOptions} />}
      <div className='flex gap-3 pl-4'>
        {isLoading ? (
          <Skeleton className='w-14 h-14  rounded-full' />
        ) : (
          <Image alt="mentor profile" className='w-14 h-14 object-cover rounded-full' width={150} height={150} src={data.course.user.avatar} />

        )}
        <div className='flex-1'>
          <p className='font-semibold text-lg'>Maiara Giacomelli</p>
          <p className='font-medium text-zinc-500 text-sm'>Educadora</p>
          <p className='pt-2'>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eos suscipit recusandae. Magni, culpa dolor expedita dolorem odit autem sequi dicta debitis? Id natus harum ipsam voluptatum ipsa dicta. Assumenda.</p>
          <p className='pt-2'>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eos suscipit recusandae. Magni, culpa dolor expedita dolorem odit autem sequi dicta debitis? Id natus harum ipsam voluptatum ipsa dicta. Assumenda.</p>
          <p className='pt-2'>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eos suscipit recusandae. Magni, culpa dolor expedita dolorem odit autem sequi dicta debitis? Id natus harum ipsam voluptatum ipsa dicta. Assumenda.</p>
          <p className='pt-2'>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eos suscipit recusandae. Magni, culpa dolor expedita dolorem odit autem sequi dicta debitis? Id natus harum ipsam voluptatum ipsa dicta. Assumenda.</p>
          <p className='pt-2'>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eos suscipit recusandae. Magni, culpa dolor expedita dolorem odit autem sequi dicta debitis? Id natus harum ipsam voluptatum ipsa dicta. Assumenda.</p>
        </div>
        <div>
          <ButtonProgress />
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
    </>
  )
}