'use client'

import Image from 'next/image'
import { ButtonAction } from '../components/button'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Comforter } from 'next/font/google'

const comforter = Comforter({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin']
})

export default function Journey() {
	return (
		<>
			<div className="w-full h-[650px]">
				<Image
					alt="banner"
					quality={100}
					className="w-screen h-[650px] absolute top-0 -z-10 object-cover overflow-hidden"
					width={1900}
					height={500}
					src={`https://pub-42106aea52b641a1b4180204ede5c2dd.r2.dev/bg.png`}
				/>

				<div className=" w-full  items-start flex flex-col justify-center ">
					<div className=" mx-40 mt-40 mb-32 z-50 w-[700px]">
						<h1 className={`mt-3 ${comforter.className} text-8xl`}>
							Nome do Conteúdo
						</h1>
						<p className="text-zinc-200 pt-4">
							Você está cansada de acordar exausta, sentir-se constantemente sem
							energia, enquanto luta para perder peso sem sucesso? Descubra como
							desinflamar seu corpo tratando seu intestino é o que você precisa
							para voltar a se sentir bem consigo mesma!
						</p>
						<ButtonAction />
					</div>
					<div className="w-full h-[100px] z-10 bg-gradient-to-t from-zinc-950 to-transparent" />
				</div>
			</div>

			<div className="bg-zinc-950 h-full w-full">
				<Swiper
					className="w-[500px]"
					spaceBetween={50}
					autoplay
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					<SwiperSlide>
						<Image
							alt="banner"
							quality={100}
							className="object-cover transition-all duration-1000 w-full h-full group-hover:opacity-0"
							width={260}
							height={400}
							src={'/babi.jpeg'}
						/>
					</SwiperSlide>
					<SwiperSlide>
						{' '}
						<Image
							alt="banner"
							quality={100}
							className="object-cover transition-all duration-1000 w-full h-full group-hover:opacity-0"
							width={260}
							height={400}
							src={'/babi.jpeg'}
						/>
					</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
				</Swiper>
				<div className="pt-32 px-10 ">
					<h1 className="text-2xl mb-6 font-semibold text-left">Módulo 1</h1>
					<div className="mt-40 flex items-center gap-4">
						<div className="hover:w-[700px] overflow-hidden group transition-all duration-1000 w-[260px] h-[400px] bg-zinc-900 rounded relative">
							<Image
								alt="banner"
								quality={100}
								className="object-cover transition-all duration-1000 w-full h-full group-hover:opacity-0"
								width={260}
								height={400}
								src={'/babi.jpeg'}
							/>

							<video
								width="100%"
								height="400"
								muted
								autoPlay
								loop
								src="/video.mp4"
								className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-2000 group-hover:opacity-100"
							/>
						</div>

						<div className="hover:w-[700px] transition-all duration-1000  w-[260px] h-[400px] bg-zinc-900 rounded"></div>
						<div className="hover:w-[700px] transition-all duration-1000  w-[260px] h-[400px] bg-zinc-900 rounded"></div>
						<div className="w-[260px] h-[400px] bg-zinc-900 rounded"></div>
					</div>
				</div>
			</div>
		</>
	)
}
