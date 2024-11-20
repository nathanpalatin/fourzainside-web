'use client'
import Link from 'next/link'

import Image from 'next/image'

import backgroundHome from '@/assets/background-home.png'

import logo from '@/assets/icon.png'
import logoLight from '@/assets/icon-light.png'

import { Loader2 } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useFormState } from '@/hooks/use-form-state'

import { forgotPassword } from './actions'
import { useTheme } from 'next-themes'

export function ForgetPasswordForm() {
	const { theme } = useTheme()

	const [{ errors, message, success }, handleSubmit, isPending] =
		useFormState(forgotPassword)

	return (
		<>
			<div
				className={`h-screen w-screen absolute top-0 left-0 -z-0 dark:bg-zinc-900/95 bg-zinc-200/80
				 backdrop-blur-sm`}
			/>
			<Image
				alt="background"
				className="h-screen absolute top-0 left-0 w-screen object-cover -z-10"
				quality={100}
				width={500}
				height={500}
				src={backgroundHome}
			/>
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
							src={theme != 'light' ? logo : logoLight}
						/>
						<Input
							name="credential"
							placeholder="Digite o e-mail cadastrado"
							id="credential"
							className="rounded-full text-center border-none dark:bg-zinc-100 bg-[#101010]/5 pt-6 pb-5 text-zinc-900 "
						/>

						{errors?.credential && (
							<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
								{errors.credential[0]}
							</p>
						)}
					</div>

					<Button
						className="w-full mt-5 rounded-full pt-6 pb-5 border-2 dark:text-zinc-200 bg-transparent dark:border-zinc-100 border-zinc-900 text-zinc-900"
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
					className="dark:text-zinc-400 text-zinc-700 text-sm font-light hover:no-underline dark:hover:text-zinc-200"
				>
					Lembrou a senha? Entrar
				</Link>
			</div>
		</>
	)
}
