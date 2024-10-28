'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'

import logo from '@/assets/logo.png'
import logoLight from '@/assets/logo-light.png'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from '@/hooks/use-form-state'

import { signInWithEmailAndPassword } from './actions'

export function SignInForm() {
	const router = useRouter()

	const { theme } = useTheme()

	const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
		signInWithEmailAndPassword,
		() => {
			router.push('/')
		}
	)

	return (
		<div className=" text-center">
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

				<Image
					alt="logo mentor"
					className="mx-auto mb-10 block md:hidden"
					width={200}
					priority
					height={100}
					src={theme === 'dark' ? logo : logoLight}
				/>

				<h1 className="text-lg font-bold text-zinc-800 dark:text-white">Olá, seja bem vindo</h1>
				<div className="items-center justify-center">
					<Input
						name="credential"
						placeholder="E-mail ou username"
						id="credential"
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5  text-zinc-700 dark:bg-transparent dark:text-white"
					/>

					{errors?.credential && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">{errors.credential[0]}</p>
					)}
				</div>

				<div className="items-center justify-center">
					<Input
						name="password"
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:bg-transparent dark:text-white"
						type="password"
						placeholder="Senha"
						id="password"
					/>

					{errors?.password && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">{errors.password[0]}</p>
					)}
				</div>

				<Button
					className="w-full rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-900"
					type="submit"
					disabled={isPending}
				>
					{isPending ? <Loader2 className="size-4 animate-spin" /> : 'Acessar conta'}
				</Button>

				<Button
					className=" w-full rounded border-2 border-zinc-800 bg-zinc-100  hover:bg-zinc-200 dark:hover:bg-zinc-900 "
					variant="link"
					asChild
				>
					<Link href="/auth/sign-up" className="text-zinc-700 hover:no-underline dark:hover:text-zinc-200">
						Criar uma conta
					</Link>
				</Button>
			</form>
			<Link href="/auth/forgot-password" className="text-xs font-normal text-zinc-400/70">
				Esqueci minha senha
			</Link>
		</div>
	)
}
