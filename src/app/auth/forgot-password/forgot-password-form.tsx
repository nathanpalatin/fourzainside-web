'use client'
import Link from 'next/link'

import Image from 'next/image'

import logo from '@/assets/icon.png'

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
		<div className="z-50 w-[340px] text-center">
			{success && (
				<Alert
					variant="success"
					className="mb-4 bg-green-700 border-none rounded-xl"
				>
					<AlertTitle className="text-white">
						E-mail enviado com sucesso!
					</AlertTitle>
					<AlertDescription>
						<p>Por favor, verifique seu e-mail para redefinir sua senha.</p>
					</AlertDescription>
				</Alert>
			)}
			<form onSubmit={handleSubmit} className="mb-5 space-y-4">
				<div className="items-center justify-center">
					<Image
						alt="logo vance"
						width={160}
						className="mx-auto mb-10 animate-pulse-slow"
						height={100}
						src={logo}
					/>
					<Input
						name="credential"
						placeholder="Digite o e-mail cadastrado"
						id="credential"
						className="rounded-full border-2 text-center bg-zinc-100 pt-6 pb-5 text-zinc-900 "
					/>

					{errors?.credential && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
							{errors.credential[0]}
						</p>
					)}
				</div>

				<Button
					className="w-full mt-5 rounded-full pt-6 pb-5 border text-zinc-200 bg-transparent border-zinco-100"
					type="submit"
					disabled={isPending}
				>
					{isPending ? <Loader2 className="size-4 animate-spin" /> : 'Enviar'}
				</Button>
			</form>
			{!success && message && (
				<Alert
					variant="destructive"
					className="bg-red-600 my-4 pt-4 pb-3 w-[330px] mx-auto border-none rounded-full "
				>
					<AlertTitle className="text-zinc-100 font-semibold">
						Ops, algo deu errado!
					</AlertTitle>
					<AlertDescription className="text-zinc-100">
						{message}
					</AlertDescription>
				</Alert>
			)}
			<Link
				href="/auth/sign-in"
				className="text-zinc-400 text-sm font-light hover:no-underline dark:hover:text-zinc-200"
			>
				Lembrou a senha? Entrar
			</Link>
		</div>
	)
}
