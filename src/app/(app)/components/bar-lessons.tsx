'use client'

import { VideoIcon } from 'lucide-react'
import { CardLesson } from './card-lesson'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { getLessonsFromCourse } from '@/http/get-lessons'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export function BarLessons() {
	const { slug } = useParams<{ lesson: string; slug: string }>()
	const { data, isLoading } = useQuery({
		refetchOnWindowFocus: false,
		queryKey: ['lesson', slug],
		queryFn: () => getLessonsFromCourse(slug)
	})

	console.log(slug)

	return (
		<Accordion type="single" collapsible className="mb-2 w-full">
			<AccordionItem
				value="item-1"
				className="px-4 mx-1 py-1 border rounded border-zinc-700"
			>
				<AccordionTrigger className="hover:no-underline">
					<CardLesson
						module="1"
						title="Modulação intestinal"
						lessons={4}
						totalTime="01:03:30"
					/>
				</AccordionTrigger>
				<AccordionContent className=" space-y-2 border-t border-zinc-600 pt-4">
					<div className="flex items-center justify-between">
						<div className="flex flex-1 gap-2 items-center truncate">
							<VideoIcon size={18} fill="green" className="text-green-400" />
							<h1 className="truncate text-xs pr-4 text-green-400">
								Orientações Gerais
							</h1>
						</div>
						<h1 className="text-xs text-zinc-500">02:35</h1>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-1 gap-2 items-center truncate">
							<VideoIcon size={18} className="text-zinc-400" />
							<h1 className="truncate text-xs pr-4 text-zinc-400">
								Orientações Privadas
							</h1>
						</div>
						<h1 className="text-xs text-zinc-500">01:40</h1>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
