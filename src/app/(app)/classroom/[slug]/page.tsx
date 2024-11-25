'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Image from 'next/image'
import bgGrid from '@/assets/header-thumb.png'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { File, FileQuestion, PlayCircleIcon, ScrollText } from 'lucide-react'

import { CardLesson } from '../../components/card-lesson'
import { CardFileLesson } from '../../components/card-file-lesson'
import { CardHelpLesson } from '../../components/card-help-lesson'
import { LoadingTranscription } from '../../components/loading-transcription'
import { ClassLesson } from '@/app/(app)/components/class-lesson'

export default function ClassHome() {
	return (
		<div className="space-y-4 py-4">
			<Image
				alt=""
				className="absolute right-10 top-0 object-cover"
				src={bgGrid}
				width={600}
				height={300}
			/>
			<div className="flex items-start justify-between gap-4">
				<div className="w-9/12 flex flex-col gap-4 ">
					<ClassLesson />
				</div>
				<div className="w-3/12 gap-5 flex flex-col">
					<div className=" bg-zinc-200 dark:bg-zinc-900  ">
						<Tabs defaultValue="lessons" className="mt-2 h-screen">
							<TabsList className=" mb-8 grid w-full grid-cols-4">
								<TabsTrigger value="lessons">
									<PlayCircleIcon />
								</TabsTrigger>
								<TabsTrigger value="materials">
									<File />{' '}
								</TabsTrigger>
								<TabsTrigger value="transcription">
									<ScrollText />{' '}
								</TabsTrigger>
								<TabsTrigger value="help">
									<FileQuestion />{' '}
								</TabsTrigger>
							</TabsList>
							<TabsContent value="lessons">
								<Card>
									<CardHeader>
										<CardTitle>Conteúdo</CardTitle>
									</CardHeader>
									<CardContent className="w-full">
										<CardLesson
											module="1"
											title="Modulação intestinal"
											lessons={4}
											totalTime="03:30"
										/>
										<CardLesson
											module="2"
											title="Modulação intestinal"
											lessons={8}
											totalTime="05:42"
										/>
										<CardLesson
											module="3"
											title="Modulação intestinal"
											lessons={2}
											totalTime="02:30"
										/>
										<CardLesson
											module="4"
											title="Modulação intestinal"
											lessons={9}
											totalTime="10:38"
										/>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="materials">
								<Card>
									<CardHeader>
										<CardTitle>Material complementar</CardTitle>
									</CardHeader>
									<CardContent className="w-full">
										<CardFileLesson title="Aula 01" type={'PDF'} />
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="transcription">
								<Card>
									<CardHeader>
										<CardTitle className=" focus-visible:text-red-500 ">
											Transcrição
										</CardTitle>
									</CardHeader>
									<CardContent className="w-full h-[600px] overflow-y-auto">
										<div className="px-3 space-y-2">
											<LoadingTranscription />
										</div>
									</CardContent>
								</Card>
							</TabsContent>

							<TabsContent value="help">
								<Card>
									<CardHeader>
										<CardTitle>Dúvidas</CardTitle>
									</CardHeader>
									<CardContent className="w-full">
										<CardHelpLesson
											title="Não entendi essa parte...."
											time="há 3 horas"
										/>
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	)
}
