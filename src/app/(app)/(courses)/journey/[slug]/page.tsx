import Image from 'next/image'
import { ButtonAction } from '../components/button'

import { Comforter } from 'next/font/google'
import { MenuSidebar } from '../../../components/sidebar-menu'
import { TopSidebar } from '../../../components/top-sidebar'

import morgan from '@/assets/morgan.png'
import jao from '@/assets/jao.png'

import { Progress } from '@/components/ui/progress'
const comforter = Comforter({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin']
})

export default function Journey() {
	return (
		<div className="-z-10 min-h-screen bg-zinc-950/90">
			<Image
				alt="banner"
				quality={100}
				className="w-screen h-[650px] absolute z-0 object-cover "
				width={1900}
				height={500}
				src={`https://pub-42106aea52b641a1b4180204ede5c2dd.r2.dev/bg.png`}
			/>
			<MenuSidebar />
			<TopSidebar />

			<div className="overflow-x-hidden ml-40  flex flex-col justify-center ">
				<div className=" mt-40 z-50 w-[700px]">
					<h1 className={`mt-3 ${comforter.className} text-8xl`}>
						Nome do Conteúdo
					</h1>
					<p className="text-zinc-200 pt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam qui
						explicabo iusto aliquam optio omnis officia cumque! Tempora,
						consequatur modi fuga repellat, et, necessitatibus totam rem
						reiciendis asperiores itaque sed.
					</p>
					<ButtonAction />
				</div>
				<div className=" h-60 z-10 bg-gradient-to-t from-zinc-950 to-transparent" />
				<div className="-mt-32 z-50">
					<div className="flex items-center gap-5 mb-10">
						<Image
							alt=""
							width={200}
							height={320}
							src="https://pub-42106aea52b641a1b4180204ede5c2dd.r2.dev/maia-performa.png"
						/>
						<Image
							alt=""
							width={200}
							height={320}
							src="https://pub-42106aea52b641a1b4180204ede5c2dd.r2.dev/maia-performa.png"
						/>
						<Image
							alt=""
							width={200}
							height={320}
							src="https://pub-42106aea52b641a1b4180204ede5c2dd.r2.dev/maia-performa.png"
						/>
						<Image
							alt=""
							width={200}
							height={320}
							src="https://pub-42106aea52b641a1b4180204ede5c2dd.r2.dev/maia-performa.png"
						/>
					</div>
				</div>
				<div className="z-50">
					<h1 className="text-xl">Continue de onde parou:</h1>
					<div className="relative mt-4">
						<div className="flex gap-5 mb-10 overflow-x-auto scrollbar-hide">
							<div className="rounded-xl bg-zinc-950 w-[337px] h-[186px] flex-shrink-0">
								<Image
									alt=""
									width={337}
									height={186}
									className="object-cover w-full h-full opacity-80"
									src={morgan}
								/>
								<div className="relative  w-[300px]  bottom-16 mx-auto ">
									<h1 className=" text-center mx-auto text-2xl truncate font-bold">
										Título do módulo
									</h1>
									<div className="w-[280px] mt-1 mx-auto">
										<Progress
											className="bg-zinc-900/70 from-zinc-50 to-zinc-100 h-1 rounded-none flex-1"
											value={67}
										/>
									</div>
								</div>
							</div>
							<div className="rounded-xl bg-zinc-600 w-[337px] h-[186px] flex-shrink-0">
								<Image
									alt=""
									width={337}
									height={186}
									className="object-cover w-full h-full opacity-80"
									src={jao}
								/>
								<div className="relative  w-[300px]  bottom-16 mx-auto ">
									<h1 className=" text-center mx-auto text-2xl truncate font-bold">
										Título do módulo
									</h1>
									<div className="mt-1 w-[280px] mx-auto">
										<Progress
											className="bg-zinc-900/70 from-zinc-50 to-zinc-100 h-1 rounded-none flex-1"
											value={24}
										/>
									</div>
								</div>
							</div>
							<div className="rounded-xl bg-zinc-600 w-[337px] h-[186px] flex-shrink-0"></div>
							<div className="rounded-xl bg-zinc-600 w-[337px] h-[186px] flex-shrink-0"></div>
							<div className="rounded-xl bg-zinc-600 w-[337px] h-[186px] flex-shrink-0"></div>
						</div>
						<div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none"></div>
					</div>
				</div>

				<h1 className="text-xl">Conteúdos feitos pensando em você:</h1>
				<h1 className="text-xl">Categorias:</h1>
			</div>
		</div>
	)
}
