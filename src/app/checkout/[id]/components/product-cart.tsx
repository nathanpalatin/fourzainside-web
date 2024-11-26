import Image from 'next/image'

import productCart from '@/assets/performa-logo.png'
import { Input } from '@/components/ui/input'
import { TicketIcon } from 'lucide-react'
export function ProductCart() {
	return (
		<div>
			<div className="w-full border-t border-zinc-300 border-b">
				<div className="py-8">
					<div className="flex gap-3 items-start">
						<Image
							className="border border-zinc-200 shadow p-2 object-contain rounded size-20"
							src={productCart}
							alt="Imagem do produto"
						/>
						<div className="flex mt-1 flex-col gap-2">
							<div className="flex items-center justify-between">
								<h1 className="text-zinc-800 flex-1 text-sm font-semibold">
									Performa
								</h1>
								<h1 className="text-sm text-teal-700 font-semibold">
									R$ 1.000.002,00
								</h1>
							</div>
							<p className="text-zinc-500 text-xs">
								Detalhe resumido do produto que o Usuário definiu no campo do
								link de pagamento...
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<div className="flex items-center justify-between">
					<h1 className="text-zinc-800 flex gap-1 text-sm font-semibold">
						Forma de pagamento:{' '}
						<span className="font-normal text-zinc-600">À vista</span>
					</h1>

					<h1 className="text-sm text-teal-700 font-semibold">
						R$ 1.000.002,00
					</h1>
				</div>
				<h1 className="text-zinc-800 flex gap-1 text-sm font-semibold">
					Detalhe:{' '}
					<span className="font-normal text-zinc-600">Renovação anual</span>
				</h1>

				<div className="relative flex items-center mt-3">
					<TicketIcon className="absolute left-4 text-zinc-400" />
					<Input
						placeholder="Possui cupom de desconto?"
						className="pl-12 pt-3 rounded-full border border-zinc-400 bg-zinc-100 text-zinc-900"
					/>
				</div>
			</div>
		</div>
	)
}
