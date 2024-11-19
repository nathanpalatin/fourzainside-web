'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from '@/hooks/use-form-state'

import { signInWithEmailAndPassword } from './actions'

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
		<div className="w-[340px] text-center">
			<form onSubmit={handleSubmit} className="mb-5 space-y-4">
				{confirmAccount && (
					<Alert variant="success" className="mb-4">
						<AlertTriangle className="size-4" />
						<AlertTitle>Conta confirmada com sucesso!</AlertTitle>
						<AlertDescription>
							<p>Você pode acessar sua conta normalmente.</p>
						</AlertDescription>
					</Alert>
				)}
				{!success && message && (
					<Alert variant="destructive">
						<AlertTriangle className="size-4" />
						<AlertTitle>Ops, algo deu errado!</AlertTitle>
						<AlertDescription>
							<p>{message}</p>
						</AlertDescription>
					</Alert>
				)}

				<div className="w-full flex flex-col items-end space-y-3 ">
					<Input
						name="credential"
						placeholder="E-mail"
						id="credential"
						disabled={isPending}
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5  text-zinc-700 dark:bg-transparent dark:text-white"
					/>

					{errors?.credential && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
							{errors.credential[0]}
						</p>
					)}

					<Input
						name="password"
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:bg-transparent dark:text-white"
						type="password"
						disabled={isPending}
						placeholder="Senha"
						id="password"
					/>
					<Link
						href="/auth/forgot-password"
						className="text-xs text-right font-normal text-indigo-400"
					>
						Esqueceu sua senha?
					</Link>

					{errors?.password && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
							{errors.password[0]}
						</p>
					)}
				</div>
				<Button
					className="w-full rounded-xl bg-indigo-600 text-zinc-200 hover:bg-indigo-700"
					type="submit"
					disabled={isPending}
				>
					{isPending ? (
						<Loader2 className="size-4 animate-spin" />
					) : (
						'Acessar minha conta'
					)}
				</Button>

				<Button className=" w-full rounded-xl" variant="link" asChild>
					<Link
						href="/auth/sign-up"
						className="text-zinc-100 text-left font-normal hover:no-underline dark:hover:text-zinc-200"
					>
						Não tem uma conta? Cadastre-se
					</Link>
				</Button>
			</form>
		</div>
	)
}
