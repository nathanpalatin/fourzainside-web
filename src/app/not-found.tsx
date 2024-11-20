'use client'

import Image from 'next/image'
import hole from '@/assets/hole.svg'

export default function GlobalError() {
	return (
		<div className="flex h-screen justify-center items-center">
			<div className="flex gap-20">
				<div>
					<Image alt="" src={hole} width={500} height={500} />
				</div>
				<div className="flex-col self-center">
					<h1 className="text-7xl text-purple-700 font-bold">404...</h1>
					<h1 className="text-4xl text-purple-700 pb-10 font-bold">
						Repito, deu 404.
					</h1>
					<h1 className="text-5xl font-bold">Houston,</h1>
					<h1 className="text-2xl font-bold">we have a problem!</h1>
					<h1 className="text-xl text-green-400 font-bold pt-10 uppercase">
						ESTAÇãO RESPONDE:
					</h1>
					<h1 className="text-lg font-semibold text-zinc-400">
						Acho que você chegou ao limite do universo.
					</h1>
					<a href="/">
						<button className="mt-10 bg-purple-500 px-6 py-3 font-semibold rounded-xl">
							Voltar para a home
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}
