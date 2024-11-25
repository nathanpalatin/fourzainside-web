import Image from 'next/image'
import Link from 'next/link'

import defaultImage from '@/assets/jao.png'

export function ProductCard({ product }) {
	return (
		<Link href={`products/edit/${product.slug}`}>
			<div className="bg-zinc-900 border hover:border-zinc-600 transition-all border-zinc-800 rounded-xl ">
				<div className="py-4 px-6 ">
					<div className="flex items-start gap-4">
						<Image
							alt="product cover"
							className="size-20 object-cover rounded-xl"
							src={product.image ?? defaultImage}
							width={120}
							height={80}
						/>
						<div className="flex flex-col ">
							<h2 className="text-white text-xl font-bold truncate w-[200px]">
								{product.title}
							</h2>
							<p className="text-zinc-300 text-xs">Curso</p>
							<div className="flex pt-2 items-center gap-2">
								<div
									className={`relative max-w-fit inline-flex items-center justify-between  ${
										product.status === 'pending'
											? 'text-orange-500'
											: 'text-green-600'
									} bg-transparent px-1 text-sm rounded-full h-5 border`}
								>
									<span
										className={`w-2 h-2 ml-1 rounded-full ${
											product.status === 'pending'
												? 'bg-orange-500'
												: 'bg-green-600'
										}`}
									></span>
									<span className="flex-1 px-2 pt-1 font-bold text-[10px] text-success-600">
										{product.status === 'pending' ? 'PENDENTE' : 'ATIVO'}
									</span>
								</div>
								<div className="border border-zinc-700  text-center rounded-full">
									<p className="text-[10px] pt-1 px-3">AUTORAL</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}
