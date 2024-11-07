import { PlayIcon } from 'lucide-react'
import Link from 'next/link'

interface CardProps {
  link: string
  course: string
  instructorName: string
  instructorAvatar: string
}

export function CardLastLesson({ course, link, instructorName, instructorAvatar }: CardProps) {
  return (
    <Link href={`/classroom/${link}`} >
      <div className="relative border border-zinc-800 rounded bg-zinc-900 w-[350px] h-28 group cursor-pointer overflow-hidden">
        <div className="p-4 flex items-start">
          <div className="flex items-start gap-3">
            <div className="bg-zinc-700 rounded-3xl border border-zinc-600 shadow shadow-zinc-400 size-20" />
            <div className="flex-1 flex-col gap-1 p-2">
              <p className="text-zinc-400 text-sm font-normal">{instructorName}</p>
              <span className="text-zinc-200 font-medium">{course}</span>
            </div>
            <PlayIcon className="bg-indigo-500 size-12 mt-2 rounded-full p-3 hidden group-hover:block transition-opacity opacity-0 group-hover:opacity-100" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-1 absolute w-52 bg-indigo-600 z-20 rounded" />
          <div className="h-1 w-full bg-zinc-700 z-10 rounded" />
        </div>
      </div>
    </Link>
  )
}
