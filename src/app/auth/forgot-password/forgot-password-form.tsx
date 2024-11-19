'use client'
import Link from 'next/link'

import { AlertTriangle, Loader2 } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useFormState } from '@/hooks/use-form-state'

import { forgotPassword } from './actions'

export function ForgetPasswordForm() {
	const [{ errors, message, success }, handleSubmit, isPending] =
		useFormState(forgotPassword)

	return (
		<div className="w-[340px] text-center">
			{success && (
				<Alert variant="success" className="mb-4">
					<AlertTriangle className="size-4" />
					<AlertTitle>E-mail enviado com sucesso!</AlertTitle>
					<AlertDescription>
						<p>Por favor, verifique seu e-mail para redefinir sua senha.</p>
					</AlertDescription>
				</Alert>
			)}
			<form onSubmit={handleSubmit} className="mb-5 space-y-4">
				{!success && message && (
					<Alert variant="destructive">
						<AlertTriangle className="size-4" />
						<AlertTitle>Ops, algo deu errado!</AlertTitle>
						<AlertDescription>
							<p>{message}</p>
						</AlertDescription>
					</Alert>
				)}

				<div className="items-center justify-center">
					<Input
						name="credential"
						placeholder="Digite o e-mail cadastrado"
						id="credential"
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5  text-zinc-700 dark:bg-transparent dark:text-white"
					/>

					{errors?.credential && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
							{errors.credential[0]}
						</p>
					)}
				</div>

				<Button
					className="w-full rounded-xl  bg-indigo-600 text-zinc-200 hover:bg-indigo-700"
					type="submit"
					disabled={isPending}
				>
					{isPending ? <Loader2 className="size-4 animate-spin" /> : 'Enviar'}
				</Button>
			</form>
			<Link
				href="/auth/sign-in"
				className="text-zinc-100 text-sm font-normal hover:no-underline dark:hover:text-zinc-200"
			>
				Lembrou a senha? Entrar
			</Link>
		</div>
	)
}
