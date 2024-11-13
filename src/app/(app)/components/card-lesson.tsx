import { ChevronDownIcon, PlayCircleIcon } from 'lucide-react'

interface CardLessonProps {
  title: string
  lessons: number
  totalTime: string
}

export function CardLesson({ title, lessons, totalTime }: CardLessonProps) {
  return (
    <div className=' mb-3 border-zinc-800 w-full rounded'>
      <div className='p-2'>
        <div className='flex gap-3 justify-between '>
          <PlayCircleIcon color='green' size={32} />
          <div className='flex-1 flex-col leading-5'>
            <p>{title}</p>
            <span className='font-normal text-zinc-400 text-xs'>{lessons} aulas {totalTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}