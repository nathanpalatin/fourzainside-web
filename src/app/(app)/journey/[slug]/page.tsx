import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ButtonAction } from '../components/button'

export default function Journey() {
	return (
		<>
			<div className="w-full h-96 bg-gradient-to-t from-zinc-950 to-zinc-900/50">
				<Image
					alt="banner"
					quality={100}
					className="w-full h-96 absolute -z-10 object-cover overflow-hidden"
					width={1600}
					height={500}
					src={
						'https://static.wixstatic.com/media/86af11_d31821a58d27499c9654081248ab1e6c~mv2.png/v1/fill/w_404,h_152,al_c,lg_1,q_85,enc_auto/86af11_d31821a58d27499c9654081248ab1e6c~mv2.png'
					}
				/>
				<div className=" w-full  items-start flex flex-col justify-center ">
					<div className="mt-5 ml-10 z-50 w-[700px]">
						<Image
							alt="banner"
							quality={100}
							className="object-cover -ml-4"
							width={340}
							height={120}
							src={
								'https://static.wixstatic.com/media/86af11_d5d0dd5675824516862756f3617a806b~mv2.png/v1/fill/w_390,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Apresenta%C3%A7%C3%A3o%20Maia%20Giacomelli%20(2).png'
							}
						/>
						<h1 className=" mt-3 text-lg font-semibold ">
							Resgate sua energia e disposição em apenas 30 dias e ainda
							emagrecendo de forma saudável
						</h1>
						<p className=" pt-4">
							Você está cansada de acordar exausta, sentir-se constantemente sem
							energia, enquanto luta para perder peso sem sucesso? Descubra como
							desinflamar seu corpo tratando seu intestino é o que você precisa
							para voltar a se sentir bem consigo mesma!
						</p>
						<ButtonAction />
					</div>
					<div className="w-full h-52 z-0 bottom-36 relative bg-gradient-to-b to-zinc-950 from-zinc-800/5" />
				</div>
			</div>
			<div className="bg-zinc-950 h-full w-full">
				<div className="pt-32 px-10 ">
					<h1 className="text-2xl mb-6 font-semibold text-left">Módulo 1</h1>
					<div className="flex items-center gap-4">
						<div className="w-[260px] h-[400px] bg-zinc-900 rounded"></div>
						<div className="w-[260px] h-[400px] bg-zinc-900 rounded"></div>
						<div className="w-[260px] h-[400px] bg-zinc-900 rounded"></div>
						<div className="w-[260px] h-[400px] bg-zinc-900 rounded"></div>
					</div>
				</div>
			</div>
		</>
	)
}
