
import Image from 'next/image'

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"



import { File, FileQuestion, PlayCircleIcon, ScrollText, StarHalf, StarIcon } from 'lucide-react'

import maiaprofile from '@/assets/profile-maia.png'
import { CardLesson } from '../components/card-lesson'
import { CardFileLesson } from '../components/card-file-lesson'
import { CardHelpLesson } from '../components/card-help-lesson'
import { Skeleton } from '@/components/ui/skeleton'
import { videoJsOptions, VideoPlayer } from '../components/video-js'
import { ButtonProgress } from '../components/button-progress'


export default async function Home() {


	return (
		<div className="space-y-4 py-4">

			<div className="flex items-start justify-between gap-4">
				<div className="w-9/12 flex flex-col gap-4 ">
					<VideoPlayer options={videoJsOptions} />
					<div className='flex gap-3 pl-4'>
						<Image alt="mentor profile" className='w-14 h-14 object-cover rounded-full ' width={150} height={150} src={maiaprofile.src} />
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

				</div>
				<div className="w-3/12 gap-5 flex flex-col">
					<div className=" bg-zinc-200 dark:bg-zinc-900  ">
						<Tabs defaultValue="lessons" className='mt-2 h-screen' >
							<TabsList className=" mb-8 grid w-full grid-cols-4">
								<TabsTrigger value="lessons"><PlayCircleIcon /></TabsTrigger>
								<TabsTrigger value="materials"><File /> </TabsTrigger>
								<TabsTrigger value="transcription"><ScrollText /> </TabsTrigger>
								<TabsTrigger value="help"><FileQuestion /> </TabsTrigger>
							</TabsList>
							<TabsContent value="lessons">
								<Card>
									<CardHeader>
										<CardTitle>Conteúdo</CardTitle>
									</CardHeader>
									<CardContent className="w-full">
										<CardLesson title='Modulação intestinal' lessons={4} totalTime='03:30' />
										<CardLesson title='Modulação intestinal' lessons={8} totalTime='05:42' />
										<CardLesson title='Modulação intestinal' lessons={2} totalTime='02:30' />
										<CardLesson title='Modulação intestinal' lessons={9} totalTime='10:38' />
									</CardContent>
								</Card>
							</TabsContent>

							<TabsContent value="materials">
								<Card>
									<CardHeader>
										<CardTitle>Material complementar</CardTitle>
									</CardHeader>
									<CardContent className="w-full">
										<CardFileLesson title='Aula 01' type={'PDF'} />
									</CardContent>
								</Card>
							</TabsContent>

							<TabsContent value="transcription">
								<Card>
									<CardHeader>
										<CardTitle className=' focus-visible:text-red-500 '>Transcrição</CardTitle>
									</CardHeader>
									<CardContent className="w-full h-[600px] overflow-y-auto">
										<div className='px-3 space-y-2'>
											<Skeleton className="w-52 h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full  h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-32 h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full  h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full  h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-32 h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full  h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-32 h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full  h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-32 h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full  h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-32 h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-52  h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-full  h-5 bg-zinc-400 rounded-full " />
											<Skeleton className="w-32 h-5 bg-zinc-400 rounded-full " />

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
										<CardHelpLesson title='Não entendi essa parte....' time='há 3 horas' />
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
