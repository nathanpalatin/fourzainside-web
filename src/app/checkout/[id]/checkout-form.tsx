'use client'
import { useState } from 'react'

import { useParams } from 'next/navigation'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { useFormSecondState } from '@/hooks/use-form-second-state'
import { useQuery } from '@tanstack/react-query'

import { paymentAction } from '../actions/api-payment'
import {
	CheckCircleIcon,
	ChevronDown,
	CreditCardIcon,
	StickyNote
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'

import pix from '@/assets/payments/qrcode.png'

export function CheckoutForm() {
	const idProduct = useParams<{ id: string }>()

	const { data, isLoading } = useQuery({
		queryKey: ['product', idProduct.id]
		// queryFn: () => getPaymentProduct(idProduct.id)
	})

	const { handleSubmit } = useFormSecondState(paymentAction)
	const [selectedPayment, setSelectedPayment] = useState(
		'À vista - R$ 1.500,00'
	)

	const handlePaymentSelection = (payment: string) => {
		setSelectedPayment(payment)
	}

	return (
		<div className="my-4 w-80 mx-auto">
			<form onSubmit={handleSubmit}>
				<RadioGroup name="type" defaultValue="PERSONAL">
					<div className="flex items-center mb-3 justify-between">
						<div className="flex items-center space-x-2">
							<RadioGroupItem className="border-zinc-900" value="PERSONAL" />
							<Label className="text-black pt-1">Comprando no Brasil</Label>
						</div>

						<div className="flex items-center space-x-2">
							<RadioGroupItem className="border-zinc-900" value="COMPANY" />
							<Label className="text-black pt-1">Compra Internacional</Label>
						</div>
					</div>
				</RadioGroup>
				<Label className="text-zinc-600 text-sm font-semibold">
					Dados de contato:
				</Label>
				<div className="space-y-2">
					<Input
						type="text"
						name="cardExpirationDate"
						className="rounded-full text-zinc-900 text-center h-8 border-zinc-400"
						placeholder="Seu nome completo"
					/>
					<Input
						type="text"
						name="cardExpirationDate"
						className="rounded-full text-zinc-900 text-center h-8 border-zinc-400"
						placeholder="Seu e-mail"
					/>
					<Input
						type="text"
						name="cardExpirationDate"
						className="rounded-full text-zinc-900 text-center h-8 border-zinc-400"
						placeholder="Seu telefone"
					/>
					<Input
						type="text"
						name="cardExpirationDate"
						className="rounded-full text-zinc-900 text-center h-8 border-zinc-400"
						placeholder="Digite seu CPF ou CNPJ"
					/>
				</div>
				<div className="relative h-px w-full bg-zinc-400 my-4" />

				<Label className="text-zinc-600 text-sm font-semibold">
					Método de pagamento:
				</Label>
				<Tabs defaultValue="creditcard" className="mt-2">
					<TabsList className="mb-8 gap-2 grid w-full grid-cols-3">
						<TabsTrigger
							value="creditcard"
							className="flex items-center bg-white data-[state=active]:bg-zinc-100 h-6 border group border-zinc-400 data-[state=active]:border-teal-600  data-[state=active]:text-teal-600 gap-1 justify-center py-3.5  rounded-full   hover:border-gray-200"
						>
							<CreditCardIcon className=" group-data-[state=active]:text-teal-600 text-zinc-500" />
							<span className="pt-1 text-xs">Cartão</span>
						</TabsTrigger>
						<TabsTrigger
							value="pix"
							className="flex items-center bg-white data-[state=active]:bg-zinc-100 duration-200 border group border-zinc-400 data-[state=active]:border-teal-600 data-[state=active]:text-teal-600 h-7.5 justify-center gap-1 rounded-full  py-1 hover:border-gray-200"
						>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-3.5 w-3.5 group-data-[state=active]:text-teal-600 text-zinc-500"
							>
								<path d="M5.283 18.36a3.505 3.505 0 002.493-1.032l3.6-3.6a.684.684 0 01.946 0l3.613 3.613a3.504 3.504 0 002.493 1.032h.71l-4.56 4.56a3.647 3.647 0 01-5.156 0L4.85 18.36zM18.428 5.627a3.505 3.505 0 00-2.493 1.032l-3.613 3.614a.67.67 0 01-.946 0l-3.6-3.6A3.505 3.505 0 005.283 5.64h-.434l4.573-4.572a3.646 3.646 0 015.156 0l4.559 4.559zM1.068 9.422L3.79 6.699h1.492a2.483 2.483 0 011.744.722l3.6 3.6a1.73 1.73 0 002.443 0l3.614-3.613a2.482 2.482 0 011.744-.723h1.767l2.737 2.737a3.646 3.646 0 010 5.156l-2.736 2.736h-1.768a2.482 2.482 0 01-1.744-.722l-3.613-3.613a1.77 1.77 0 00-2.444 0l-3.6 3.6a2.483 2.483 0 01-1.744.722H3.791l-2.723-2.723a3.646 3.646 0 010-5.156" />
							</svg>
							<span className="text-xs pt-1">Pix</span>
						</TabsTrigger>
						<TabsTrigger
							value="boleto"
							className="flex items-center duration-200 bg-white data-[state=active]:bg-zinc-100 border group border-zinc-400 data-[state=active]:border-teal-600  data-[state=active]:text-teal-600  justify-center gap-1 rounded-full  py-1  hover:border-gray-200"
						>
							<StickyNote className="h-4 w-4 group-data-[state=active]:text-teal-600 text-zinc-500" />
							<span className="text-xs pt-1">Boleto</span>
						</TabsTrigger>
					</TabsList>

					<TabsContent value="creditcard">
						<div className="space-y-2 flex flex-col">
							<Input
								type="text"
								name="cardHolderName"
								className="rounded-full text-center h-8 border-zinc-400"
								placeholder="Nome do titular do cartão"
							/>
							<Input
								type="text"
								name="cardNumber"
								className="rounded-full text-center h-8 border-zinc-400"
								placeholder="Número do cartão"
							/>
							<div className="flex items-center gap-2">
								<Input
									type="text"
									name="cardExpirationDate"
									className="rounded-full text-center h-8 border-zinc-400"
									placeholder="Data de vencimento"
								/>
								<Input
									type="text"
									name="cardCvc"
									className="rounded-full text-center h-8 border-zinc-400"
									placeholder="CCV"
								/>
							</div>

							<DropdownMenu>
								<DropdownMenuTrigger className="group ">
									<Button className="border mt-4 h-8 w-full flex justify-between border-zinc-800 text-sm rounded-full bg-zinc-100 text-zinc-900">
										<h1 className="flex-1 pt-1">{selectedPayment}</h1>
										<ChevronDown
											className="relative text-zinc-500 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180"
											aria-hidden="true"
										/>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="bg-zinc-100 w-full">
									<DropdownMenuItem
										className="text-zinc-900 cursor-pointer"
										onClick={() =>
											handlePaymentSelection('À vista - R$ 1.500,00')
										}
									>
										À vista - R$ 1.500,00
									</DropdownMenuItem>
									<DropdownMenuItem
										className="text-zinc-900 cursor-pointer"
										onClick={() =>
											handlePaymentSelection('Parcelado - R$ 750,00 x 2')
										}
									>
										Parcelado - R$ 750,00 x 2
									</DropdownMenuItem>
									<DropdownMenuItem
										className="text-zinc-900 cursor-pointer"
										onClick={() =>
											handlePaymentSelection('Parcelado - R$ 500,00 x 3')
										}
									>
										Parcelado - R$ 500,00 x 3
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<h1 className="text-zinc-600 text-[10px] py-2">
								Esta cobrança irá aparecer em sua fatura como:{' '}
								<span className="font-semibold">NOMEFAT</span>
							</h1>
							<Button
								type="submit"
								className="bg-green-500 h-12 font-semibold pt-4 hover:bg-green-600 rounded-full"
							>
								COMPRAR AGORA
							</Button>

							<h1 className="text-green-600 pt-2 flex items-start gap-1 mx-auto text-xs font-semibold ">
								<CheckCircleIcon size={14} /> Sua compra é 100% segura
							</h1>
						</div>
					</TabsContent>
					<TabsContent value="pix">
						<Image alt="pix" width={300} className="mx-auto" src={pix} />
					</TabsContent>
					<TabsContent value="boleto">{/* Conteúdo do Boleto */}</TabsContent>
				</Tabs>
			</form>
		</div>
	)
}
