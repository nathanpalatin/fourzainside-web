import { getCourses } from '@/http/get-courses'
import { CardLastLesson } from './components/card-last-lesson'
import { GiftIcon, Ticket, TicketIcon, TrophyIcon, Users2Icon } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

export default async function Home() {

	const { courses } = await getCourses()

	return (
		<div className="space-y-4 py-4 px-6 h-screen bg-[url(/assets/header-thumb.png)] bg-no-repeat bg-right">
			<div className="flex items-start justify-between gap-4">
				<div className="w-8/12 flex flex-col gap-4 overflow-y-auto">
					<h1 className="text-sm font-semibold">Continuar de onde parou</h1>
					<div className='flex gap-4 overflow-x-hidden'>
						{courses.map((course, index) => (
							<CardLastLesson
								key={index}
								link={course.slug}
								course={course.title}
								instructorName={course.user.name}
								instructorAvatar={course.user.avatar}
							/>
						))}
					</div>
					<div className='mt-4'>
						<h1 className="text-sm font-semibold ">Veja o que vem por ai</h1>
						<span className="text-sm text-zinc-500">Descubra as novidades da nossa plataforma.</span>
						<div className='flex items-center gap-3 mt-4'>
							<div className='bg-zinc-900 rounded-full border-zinc-700 border'><span className='text-xs p-4'>TODOS OS LEMBRETES</span></div>
							<div className='bg-zinc-900 rounded-full border-zinc-700 border'><span className='text-xs p-4'>EVENTOS</span></div>
							<div className='bg-zinc-900 rounded-full border-zinc-700 border'><span className='text-xs p-4'>CONTEÚDOS</span></div>
							<div className='bg-zinc-900 rounded-full border-zinc-700 border'><span className='text-xs p-4'>NOVIDADES DA PLATAFORMA</span></div>
							<div className='bg-zinc-900 rounded-full border-zinc-700 border'><span className='text-xs p-4'>OFERTAS</span></div>
						</div>
						<div className='mt-5 space-y-3'>
							<div className='w-full h-52 bg-zinc-900 rounded border-l-4 border-green-700 hover:bg-zinc-800 cursor-pointer transition-all'>
								<div className='flex items-center gap-4 pr-4  h-full py-2'>
									<div className='flex flex-col items-center  w-[160px] justify-center border-r h-full border-zinc-700 '>
										<h1 className='text-white'>11 Nov</h1>
										<span className='text-zinc-400 text-xs'>19h</span>
									</div>
									<div className='flex flex-col space-y-2'>
										<h1 className='flex items-center gap-3'>[MENTORIA] Imersão Performa com Maiara Giacomelli <span className='border border-red-500 text-[8px] px-2 py-1 rounded-full bg-red-800'>AO VIVO</span></h1>
										<p className='text-zinc-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eaque odio delectus. Consectetur fugit, saepe corporis excepturi dolor, quo est nostrum voluptatibus inventore iusto nisi, tempora cumque libero neque necessitatibus?</p>
									</div>
								</div>
							</div>
							<div className='w-full h-52 bg-zinc-900 rounded border-l-4 border-indigo-700'>
								<div className='flex items-center gap-4 pr-4  h-full py-2'>
									<div className='flex flex-col items-center  w-[160px] justify-center border-r h-full border-zinc-700 '>
										<h1 className='text-white'>11 Nov</h1>
										<span className='text-zinc-400 text-xs'>19h</span>
									</div>
									<div className='flex flex-col space-y-2'>
										<h1 className='flex items-center gap-3'>[MENTORIA] Imersão Business com Doug Alsant <span className='border border-green-500 text-[8px] px-2 py-1 rounded-full bg-green-800 flex items-center gap-1'><TicketIcon className='size-4' /> GRÁTIS</span></h1>
										<p className='text-zinc-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eaque odio delectus. Consectetur fugit, saepe corporis excepturi dolor, quo est nostrum voluptatibus inventore iusto nisi, tempora cumque libero neque necessitatibus?</p>
									</div>
								</div>
							</div>
							<div className='w-full h-52 bg-zinc-900 rounded border-l-4 border-pink-700'>
								<div className='flex items-center gap-4 pr-4  h-full py-2'>
									<div className='flex flex-col items-center  w-[160px] justify-center border-r h-full border-zinc-700 '>
										<h1 className='text-white'>11 Nov</h1>
										<span className='text-zinc-400 text-xs'>19h</span>
									</div>
									<div className='flex flex-col space-y-2'>
										<h1 className='flex items-center gap-3'>[MENTORIA] Imersão Performa com Maiara Giacomelli <span className='border border-green-500 text-[8px] px-2 py-1 rounded-full bg-green-800'>AO VIVO</span></h1>
										<p className='text-zinc-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eaque odio delectus. Consectetur fugit, saepe corporis excepturi dolor, quo est nostrum voluptatibus inventore iusto nisi, tempora cumque libero neque necessitatibus?</p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div className="w-3/12 gap-5 flex flex-col">
					<div className="bg-zinc-200 mt-4 dark:bg-zinc-900 rounded min-h-52">
						<div className='p-4'>
							<div className='flex items-start gap-3 mb-6'>
								<div className="card-wrapper h-[80px] w-[80px]">
									<div className="card-content flex items-center justify-center text-xs">
										<TrophyIcon className='p-3 size-16 animate-pulse' />
									</div>
								</div>
								<div className='flex flex-col'>
									<h1 className='font-normal text-zinc-400 text-[12px]'>Meu objetivo</h1>
									<h1 className='font-normal text-zinc-100 text-sm'>Conquistar a tão sonhada independência financeira</h1>
									<h1 className='font-normal text-zinc-500 pt-1 text-[10px]'>até 10/10/2024</h1>
								</div>
							</div>
							<div className='flex items-center gap-3 mb-10'>
								<Progress className='h-1 flex-1' value={67} />
								<h1 className='text-[10px] text-zinc-400'>67%</h1>
							</div>
							<div className='flex items-center gap-2'>
								<Button className='bg-zinc-700 rounded gap-2 text-xs w-1/2 hover:bg-zinc-600 transition-all'><GiftIcon size={16} /> Indique e ganhe</Button>
								<Button className='bg-indigo-700 rounded gap-2 text-xs w-1/2 hover:bg-indigo-600 transition-all'><Users2Icon size={16} /> Comunidade</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
