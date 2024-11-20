'use client'
import Link from 'next/link'

import Image from 'next/image'
import logo from '@/assets/icon.png'
import logoLight from '@/assets/icon-light.png'

import { AlertTriangle, Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import backgroundHome from '@/assets/background-home.png'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useFormState } from '@/hooks/use-form-state'

import { signInWithEmailAndPassword } from './actions'
import { useTheme } from 'next-themes'

export function SignInForm() {
	const router = useRouter()

	const { theme } = useTheme()

	const params = useSearchParams()

	const confirmAccount = params.get('confirm')

	const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
		signInWithEmailAndPassword,
		() => {
			router.push('/')
		}
	)

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
							src={theme === 'dark' ? logo : logoLight}
						/>

						<Input
							name="credential"
							placeholder="Digite seu e-mail"
							id="credential"
							disabled={isPending}
							className="rounded-full border-none text-center bg-[#101010]/5 dark:bg-zinc-100 pt-6 pb-5 text-zinc-900 "
						/>

						{errors?.credential && (
							<p className="text-xs  font-medium text-red-500 dark:text-red-400">
								{errors.credential[0]}
							</p>
						)}

						<Input
							name="password"
							className="rounded-full text-center border-none dark:bg-zinc-100 bg-[#101010]/5 pt-6 pb-5 text-zinc-900 "
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
						className="w-full mt-5 rounded-full pt-6 pb-5 border-2 dark:text-zinc-200 bg-transparent dark:border-zinc-100 border-zinc-900 text-zinc-900"
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
					className="dark:text-zinc-400 text-zinc-700 text-sm font-light hover:no-underline dark:hover:text-zinc-200"
				>
					Esqueci minha senha
				</Link>
			</div>
		</>
	)
}
