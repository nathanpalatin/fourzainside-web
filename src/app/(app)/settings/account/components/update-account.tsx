'use client'
import { FormEvent, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

import { useFormSecondState } from '@/hooks/use-form-second-state'
import { UpdateAccountAction } from '../actions/update-account'

export function UpdateAccountDialog() {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [selectedGender, setSelectedGender] = useState<string | null>(null)

	const { formState, handleSubmit, isPending, errorMessages } =
		useFormSecondState(UpdateAccountAction)

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		try {
			const result = await handleSubmit(event)
			if (result?.success) {
				toast('Dados atualizados com sucesso.')
				setIsDialogOpen(false)
			}
		} catch (error) {
			console.error('Erro inesperado:', error)
		}
	}

	return (
		<AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<AlertDialogTrigger asChild>
				<Button className="text-indigo-500 hover:text-indigo-600">
					Alterar
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-zinc-900 rounded border-zinc-800">
				<AlertDialogHeader>
					<AlertDialogTitle>Atualização de dados cadastrais</AlertDialogTitle>
					<AlertDialogDescription>
						Atualize as informações abaixo:
					</AlertDialogDescription>
				</AlertDialogHeader>
				<form
					onSubmit={event => {
						event.preventDefault()
						onSubmit(event)
					}}
					className="space-y-4"
				>
					{formState.message && (
						<div className="text-red-500 text-sm">{formState.message}</div>
					)}
					<div className="flex flex-col gap-2">
						<Label htmlFor="name" className="text-sm text-gray-400">
							Nome Completo
						</Label>
						<Input
							id="name"
							name="name"
							type="text"
							placeholder="Digite seu nome completo"
							className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white"
						/>
						{errorMessages.name && (
							<span className="text-red-500 text-sm">{errorMessages.name}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="cpf" className="text-sm text-gray-400">
							CPF
						</Label>
						<Input
							id="cpf"
							name="cpf"
							type="text"
							placeholder="Digite seu CPF"
							className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white"
						/>
						{errorMessages.cpf && (
							<span className="text-red-500 text-sm">{errorMessages.cpf}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="birthDate" className="text-sm text-gray-400">
							Data de Nascimento
						</Label>
						<Input
							id="birthdate"
							name="birthdate"
							type="text"
							placeholder="Selecione sua data de nascimento"
							className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white"
						/>
						{errorMessages.birthdate && (
							<span className="text-red-500 text-sm">
								{errorMessages.birthdate}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="gender" className="text-sm text-gray-400">
							Gênero
						</Label>
						<Select
							onValueChange={setSelectedGender}
							defaultValue={selectedGender || ''}
						>
							<SelectTrigger className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white">
								<SelectValue placeholder="Selecione seu gênero" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="male">Masculino</SelectItem>
								<SelectItem value="female">Feminino</SelectItem>
							</SelectContent>
						</Select>
						{errorMessages.gender && (
							<span className="text-red-500 text-sm">
								{errorMessages.gender}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="phone" className="text-sm text-gray-400">
							Telefone
						</Label>
						<Input
							id="phone"
							name="phone"
							type="tel"
							placeholder="Digite seu telefone"
							className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white"
						/>
						{errorMessages.phone && (
							<span className="text-red-500 text-sm">
								{errorMessages.phone}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="address" className="text-sm text-gray-400">
							Endereço
						</Label>
						<Input
							id="address"
							name="address"
							type="text"
							placeholder="Digite seu endereço completo"
							className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white"
						/>
						{errorMessages.address && (
							<span className="text-red-500 text-sm">
								{errorMessages.address}
							</span>
						)}
					</div>
					<AlertDialogFooter className="border-t pt-3 border-zinc-800">
						<AlertDialogCancel asChild>
							<Button
								className="rounded-xl border-none items-start text-gray-400"
								onClick={() => setIsDialogOpen(false)}
							>
								Cancelar
							</Button>
						</AlertDialogCancel>
						<Button
							type="submit"
							className="bg-indigo-600 items-start hover:bg-indigo-700 rounded-xl text-white"
							disabled={isPending}
						>
							{isPending ? (
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							) : (
								'Salvar'
							)}
						</Button>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
