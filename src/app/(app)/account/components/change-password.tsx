'use client'
import { FormEvent, useState } from 'react'

import {
	AlertDialog,
	AlertDialogAction,
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
import { Separator } from '@/components/ui/separator'
import { Loader2 } from 'lucide-react'
import { ChangePasswordAction } from '../actions/change-password'
import { Label } from '@/components/ui/label'
import { useFormSecondState } from '@/hooks/use-form-second-state'
import { toast } from 'sonner'

export function PasswordChangeDialog() {
	const [isOpen, setIsOpen] = useState(false)
	const { formState, handleSubmit, isPending, errorMessages } =
		useFormSecondState(ChangePasswordAction)

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		toast('Event has been created.')
		try {
			const result = await handleSubmit(event) // Captura o retorno aqui
			if (result?.success) {
				console.log('Senha alterada com sucesso:', result)
				setIsOpen(false) // Fecha o diálogo em caso de sucesso
			} else {
				setIsOpen(true)
				console.log('Erro ao alterar a senha:', result)
			}
		} catch (error) {
			console.error('Erro inesperado:', error)
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogTrigger asChild>
				<Button className="text-indigo-500 hover:text-indigo-600 ">
					Alterar
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-zinc-900 rounded border-zinc-800">
				<AlertDialogHeader>
					<AlertDialogTitle>Alteração de senha</AlertDialogTitle>
					<AlertDialogDescription>
						Informe a senha atual e a nova senha abaixo:
					</AlertDialogDescription>
				</AlertDialogHeader>

				<form onSubmit={onSubmit} className="space-y-4">
					{formState.message && (
						<div className="text-red-500 text-sm">{formState.message}</div>
					)}
					<div className="flex flex-col gap-2">
						<label htmlFor="currentPassword" className="text-sm text-gray-400">
							Senha atual
						</label>
						<Input
							id="password"
							name="password"
							type="password"
							placeholder="Digite sua senha atual"
							className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white"
						/>
						{errorMessages.password && (
							<span className="text-red-500 text-sm">
								{errorMessages.password}
							</span>
						)}
					</div>
					<Separator className="my-4 bg-zinc-800" />
					<div className="flex flex-col gap-2">
						<label htmlFor="newPassword" className="text-sm text-gray-400">
							Nova senha
						</label>
						<Input
							id="newPassword"
							name="newPassword"
							type="password"
							placeholder="Digite sua nova senha"
							className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white"
						/>
						{errorMessages?.newPassword && (
							<span className="text-red-500 text-sm">
								{errorMessages.newPassword}
							</span>
						)}
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="confirmPassword" className="text-sm text-gray-400">
							Confirme a nova senha
						</Label>
						<Input
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							placeholder="Confirme sua nova senha"
							className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white"
						/>
						{errorMessages?.confirmPassword && (
							<span className="text-red-500 text-sm">
								{errorMessages.confirmPassword}
							</span>
						)}
					</div>

					<Separator className="my-4 bg-zinc-800" />

					<AlertDialogFooter>
						<AlertDialogCancel asChild>
							<Button variant="ghost" className="rounded-xl text-gray-400">
								Cancelar
							</Button>
						</AlertDialogCancel>
						<AlertDialogAction asChild>
							<Button
								type="submit"
								className="bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white"
								disabled={isPending}
							>
								{isPending ? (
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								) : (
									'Salvar'
								)}
							</Button>
						</AlertDialogAction>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
