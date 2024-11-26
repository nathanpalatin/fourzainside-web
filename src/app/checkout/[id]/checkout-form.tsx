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
import { CheckCircleIcon, ChevronDown } from 'lucide-react'

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
					<div className="flex items-center justify-between">
						<div className="flex items-end space-x-2">
							<RadioGroupItem className="border-zinc-900" value="PERSONAL" />
							<Label className="text-black">Comprando no Brasil</Label>
						</div>

						<div className="flex items-end space-x-2">
							<RadioGroupItem className="border-zinc-900" value="COMPANY" />
							<Label className="text-black">Compra Internacional</Label>
						</div>
					</div>
				</RadioGroup>
				<Label className="text-zinc-600 text-sm font-semibold">
					Dados de contato:
				</Label>
				<Input
					type="text"
					name="cardExpirationDate"
					className="rounded-full text-center h-8 border-zinc-400"
					placeholder="Seu nome completo"
				/>
				<Input
					type="text"
					name="cardExpirationDate"
					className="rounded-full text-center h-8 border-zinc-400"
					placeholder="Seu e-mail"
				/>
				<Input
					type="text"
					name="cardExpirationDate"
					className="rounded-full text-center h-8 border-zinc-400"
					placeholder="Seu telefone"
				/>
				<Input
					type="text"
					name="cardExpirationDate"
					className="rounded-full text-center h-8 border-zinc-400"
					placeholder="Digite seu CPF ou CNPJ"
				/>
				<div className="h-px w-96 my-3 mx-auto bg-zinc-300" />
				<Label className="text-zinc-600 text-sm font-semibold">
					Método de pagamento:
				</Label>
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
								onClick={() => handlePaymentSelection('À vista - R$ 1.500,00')}
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
			</form>
		</div>
	)
}
