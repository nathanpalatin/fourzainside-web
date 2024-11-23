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
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'

import { useFormSecondState } from '@/hooks/use-form-second-state'
import { ChangePasswordAction } from '../actions/change-password'

export function PasswordChangeDialog() {
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const { formState, handleSubmit, isPending, errorMessages } =
		useFormSecondState(ChangePasswordAction)

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		try {
			const result = await handleSubmit(event)
			if (result?.success) {
				toast('Senha alterada com sucesso.')
				setIsDialogOpen(false)
			}
		} catch (error) {
			console.error('Erro inesperado:', error)
		}
	}

	return (
		<AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<AlertDialogTrigger asChild>
				<Button
					className="text-indigo-500 hover:text-indigo-600"
					onClick={() => setIsDialogOpen(true)}
				>
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
						<Label htmlFor="password" className="text-sm text-gray-400">
							Senha atual
						</Label>
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
						<Label htmlFor="newPassword" className="text-sm text-gray-400">
							Nova senha
						</Label>
						<Input
							id="newPassword"
							name="newPassword"
							type="password"
							placeholder="Digite sua nova senha"
							className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white"
						/>
						{errorMessages.newPassword && (
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
						{errorMessages.confirmPassword && (
							<span className="text-red-500 text-sm">
								{errorMessages.confirmPassword}
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
