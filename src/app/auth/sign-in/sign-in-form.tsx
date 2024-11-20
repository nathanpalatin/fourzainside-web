'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from '@/hooks/use-form-state'

import { signInWithEmailAndPassword } from './actions'
import Image from 'next/image'

import logo from '@/assets/icon.png'

export function SignInForm() {
	const router = useRouter()

	const params = useSearchParams()

	const confirmAccount = params.get('confirm')

	const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
		signInWithEmailAndPassword,
		() => {
			router.push('/')
		}
	)

	return (
		<div className="w-[340px] z-50 text-center">
			<form onSubmit={handleSubmit} className="my-52">
				{confirmAccount && (
					<Alert variant="success" className=" mb-4">
						<AlertTriangle className="size-4" />
						<AlertTitle>Conta confirmada com sucesso!</AlertTitle>
						<AlertDescription>
							<p>Você pode acessar sua conta normalmente.</p>
						</AlertDescription>
					</Alert>
				)}

				<div className="w-full flex flex-col space-y-2 ">
					<Image
						alt="logo vance"
						width={160}
						className="mx-auto mb-10 animate-pulse-slow"
						height={100}
						src={logo}
					/>

					<Input
						name="credential"
						placeholder="Digite seu e-mail"
						id="credential"
						disabled={isPending}
						className="rounded-full border-2 text-center bg-zinc-100 pt-6 pb-5 text-zinc-900 "
					/>

					{errors?.credential && (
						<p className="text-xs  font-medium text-red-500 dark:text-red-400">
							{errors.credential[0]}
						</p>
					)}

					<Input
						name="password"
						className="rounded-full text-center border-2 bg-zinc-100 pt-6 pb-5 text-zinc-900 "
						type="password"
						disabled={isPending}
						placeholder="Digite sua senha"
						id="password"
					/>

					{errors?.password && (
						<p className="text-xs  font-medium text-red-500 dark:text-red-400">
							{errors.password[0]}
						</p>
					)}
				</div>
				<Button
					className="w-full mt-5 rounded-full pt-6 pb-5 border text-zinc-200 bg-transparent border-zinco-100"
					type="submit"
					disabled={isPending}
				>
					{isPending ? (
						<Loader2 className="size-4 animate-spin" />
					) : (
						'Acessar conta'
					)}
				</Button>
				{!success && message && (
					<Alert
						variant="destructive"
						className="bg-red-600 mt-4 pt-4 pb-3 w-[330px] mx-auto border-none rounded-full "
					>
						<AlertTitle className="text-zinc-100 font-semibold">
							Ops, algo deu errado!
						</AlertTitle>
						<AlertDescription className="text-zinc-100">
							{message}
						</AlertDescription>
					</Alert>
				)}
			</form>

			<Link
				href="/auth/forgot-password"
				className="text-zinc-400 text-sm font-light hover:no-underline dark:hover:text-zinc-200"
			>
				Esqueci minha senha
			</Link>
		</div>
	)
}
