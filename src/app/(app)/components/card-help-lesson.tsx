import { ChevronDownIcon, ChevronRightIcon, DownloadIcon, FileBoxIcon, HelpCircle, PlayCircleIcon } from 'lucide-react'

interface CardLessonProps {
  title: string
  time: string
}

export function CardHelpLesson({ title, time }: CardLessonProps) {
  return (
    <div className='border mb-3 border-zinc-800 rounded'>
      <div className='py-2 px-4'>
        <div className='flex gap-2 items-center justify-between'>
          <HelpCircle />
          <div className='flex-1 flex-col leading-5'>
            <p>{title}</p>
            <span className='font-normal text-zinc-400 text-xs'>{time}</span>
          </div>
          <ChevronRightIcon size={16} />
        </div>
      </div>
    </div>
  )
}