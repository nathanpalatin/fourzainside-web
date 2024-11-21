'use client'

import Image from 'next/image'
import { ButtonAction } from '../components/button'

import { Comforter } from 'next/font/google'

const comforter = Comforter({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin']
})

export default function Journey() {
	return (
		<div className="-z-10 h-screen bg-zinc-950">
			<Image
				alt="banner"
				quality={100}
				className="w-screen h-[650px] absolute  z-0 object-cover overflow-hidden"
				width={1900}
				height={500}
				src={`https://pub-42106aea52b641a1b4180204ede5c2dd.r2.dev/bg.png`}
			/>
			<div className=" w-full items-start flex flex-col justify-center ">
				<div className=" mx-40 mt-40 z-50 w-[700px]">
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
				<div className="w-full h-60 z-10 bg-gradient-to-t from-zinc-950 to-transparent" />
			</div>
		</div>
	)
}
