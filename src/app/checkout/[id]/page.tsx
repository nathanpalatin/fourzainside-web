import Image from 'next/image'

import { CheckoutForm } from './checkout-form'
import { PaymentThird } from './components/button-pay-bank'

import gpay from '@/assets/payments/g-pay.png'
import applepay from '@/assets/payments/applepay.png'
import nupay from '@/assets/payments/nupay.png'
import picpay from '@/assets/payments/picpay.png'

import logopay from '@/assets/payments/logopay.png'
import { Store } from 'lucide-react'
import { ProductCart } from './components/product-cart'

export default function Checkout() {
	return (
		<div className="h-screen w-screen flex justify-between px-10 items-center bg-white">
			<div className="w-1/2 h-[800px]">
				<Image alt="logopay" src={logopay} width={150} height={80} />
				<div className="mt-32 px-16">
					<div className="flex items-end gap-3 mb-10">
						<Store className="text-zinc-900 bg-zinc-50 size-8 shadow-md shadow-zinc-400 rounded-full p-2" />
						<h1 className="text-sm text-black font-semibold">
							Nome do Cobrador
						</h1>
					</div>
					<h1 className="text-zinc-600 text-sm">Valor total a pagar:</h1>
					<h1 className="text-teal-700 text-4xl pt-1 pb-6 font-semibold">
						R$ 1.000.002,00
					</h1>
					<ProductCart />
				</div>
			</div>
			<div className="w-1/2  border border-zinc-400 rounded-xl h-[800px]">
				<div className="p-10 mx-auto text-center">
					<h1 className="text-zinc-400 text-xs">Pague mais fácil com:</h1>
					<div className="my-6 flex justify-center items-center gap-2">
						<PaymentThird link="" img={gpay} />
						<PaymentThird link="" img={applepay} />
						<PaymentThird link="" img={nupay} />
						<PaymentThird link="" img={picpay} />
					</div>
					<div className="flex w-96 mx-auto items-center justify-center my-6 space-x-4">
						<div className="h-px bg-gray-300 flex-1"></div>
						<span className="text-zinc-400 text-xs font-medium">
							ou pague abaixo:
						</span>

						<div className="h-px bg-gray-300 flex-1"></div>
					</div>

					<CheckoutForm />

					<h1 className="text-zinc-500 text-xs mx-auto my-5 w-[310px]">
						Ao clicar em "Compre agora", você concorda com os{'\n'}
						<span className="underline">Termos de Compra</span> e está ciente da{' '}
						<span className="underline">Política de Privacidade</span>.
					</h1>
					<p className="text-zinc-400 text-[10px]">
						Tecnologia Vance © 2024 - Todos os direitos reservados
					</p>
				</div>
			</div>
		</div>
	)
}
