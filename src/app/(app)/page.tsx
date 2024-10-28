import { StockCarousel } from '@/components/slider-stock'
import { Button } from '@/components/ui/button'

import Image from 'next/image'

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'

import { CheckIcon, ChevronDownIcon, PlayCircleIcon, Trash } from 'lucide-react'
import { VideoPlayer } from './components/videoplayer'

import maiaprofile from '@/assets/profile-maia.png'
import { CardLesson } from './components/card-lesson'

export default async function Home() {

	return (
		<div className="space-y-4 py-4">

			<div className="flex items-start justify-between gap-1 w-full">
				<div className="w-9/12 flex flex-col gap-4 overflow-y-auto">
					<VideoPlayer />
					<div className='flex gap-3 pl-4'>
						<Image alt="" className='w-14 h-14 object-cover rounded-full ' width={150} height={150} src={maiaprofile.src} />
						<div className='flex-1'>
							<p className='font-semibold text-lg'>Maiara Giacomelli</p>
							<p className='font-medium text-zinc-500 text-sm'>Educadora</p>
						</div>
						<div className='bg-zinc-600 text-sm px-4 items-center flex gap-2'><CheckIcon /> Marcar como assistida</div>
					</div>
					<h1 className='pl-4'>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eos suscipit recusandae. Magni, culpa dolor expedita dolorem odit autem sequi dicta debitis? Id natus harum ipsam voluptatum ipsa dicta. Assumenda.</h1>
					<div className="flex items-center justify-between w-full gap-2">
						<div className="dark:border rounded-xl bg-cardprimary dark:bg-zinc-900 border-zinc-800 min-h-32 w-1/2">
							<div className="p-6">
								<h1 className="text-white text-lg mb-10">Materias complementares</h1>
								<h1 className="text-white text-5xl flex gap-2 font-semibold">
									TOP!
								</h1>
							</div>
						</div>
						<div className="dark:border rounded-xl bg-zinc-200 dark:bg-zinc-900 border-zinc-800 w-1/2">
							<div className="p-6">
								<h1 className="text-zinc-800 dark:text-muted-foreground text-lg mb-10">BORA PO</h1>
								<h1 className="text-cardprimary dark:text-zinc-100 text-5xl flex gap-2 font-semibold">
									<span className="text-xl">R$</span>ASDASD
								</h1>
							</div>
						</div>
					</div>



					<div className="dark:border rounded bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 h-52">
						<div className="p-6">
							<h1 className="text-zinc-100 text-lg mb-10">Crédito planejado:</h1>
						</div>
					</div>
				</div>
				<div className="w-3/12 gap-5 flex flex-col">
					<div className="dark:border bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 ">
						<div className="p-2">
							<h1 className="text-zinc-100 text-2xl p-2 font-semibold">Conteúdo</h1>
							<div className='w-[100%] my-2 h-px bg-zinc-900' />

							<CardLesson title='Modulação intestinal' lessons={4} totalTime='03:30' />
							<CardLesson title='Modulação intestinal' lessons={8} totalTime='03:30' />
							<CardLesson title='Modulação intestinal' lessons={2} totalTime='03:30' />
							<CardLesson title='Modulação intestinal' lessons={9} totalTime='03:30' />
						</div>
					</div>


				</div>
			</div>
			<Drawer>
				<DrawerTrigger asChild>
					<Button className="bg-zinc-800 flex gap-2 rounded">
						<Trash size={16} /> Opções
					</Button>
				</DrawerTrigger>
				<DrawerContent className="h-[300px] backdrop-blur-sm">
					<div className="mx-auto h-2 w-[100px] rounded-full bg-zinc-500" />
					<DrawerHeader>
						<DrawerTitle className="text-center text-3xl">Você tem certeza disso?</DrawerTitle>
						<DrawerDescription className="text-center">Essa ação não poderá ser desfeita.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose className="text-muted-foreground">fechar</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
