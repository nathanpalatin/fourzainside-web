'use client'

import Link from 'next/link'
import { signUpAction } from './actions'
import { useRouter } from 'next/navigation'
import { AlertTriangle, Loader2 } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useFormState } from '@/hooks/use-form-state'
import { PhoneInput } from '@/components/ui/phone-input'
import { useState } from 'react'

export function SignUpForm() {
	const router = useRouter()

	const [email, setEmail] = useState('')

	const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
		signUpAction,
		() => {
			router.push(`/auth/email-validation?confirmation=${email}`)
		}
	)

	return (
		<div className=" z-50 w-[340px]">
			<form onSubmit={handleSubmit} className="space-y-4">
				{success === false && message && (
					<Alert variant="destructive">
						<AlertTriangle className="size-4" />
						<AlertTitle>Op, algo deu errado!</AlertTitle>
						<AlertDescription>
							<p>{message}</p>
						</AlertDescription>
					</Alert>
				)}

				<div className="space-y-1">
					<Input
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:text-zinc-100 dark:bg-transparent"
						name="name"
						disabled={isPending}
						placeholder="Seu nome"
						id="name"
						aria-label="Nome completo"
					/>
					{errors?.name && (
						<p className="text-xs font-medium text-red-500">{errors.name[0]}</p>
					)}
				</div>

				<div className="space-y-1">
					<Input
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:text-zinc-100 dark:bg-transparent"
						name="email"
						disabled={isPending}
						onChange={e => setEmail(e.target.value)}
						placeholder="Seu melhor e-mail"
						type="email"
						id="email"
						autoComplete="false"
					/>
					{errors?.email && (
						<p className="text-xs font-medium text-red-500">
							{errors.email[0]}
						</p>
					)}
				</div>

				<div className="space-y-1">
					<PhoneInput
						defaultCountry="BR"
						maxLength={15}
						disabled={isPending}
						name="phone"
						id="phone"
						placeholder="Seu melhor telefone"
						className="border-none"
						aria-label="Telefone"
					/>
					{errors?.phone && (
						<p className="text-xs font-medium text-red-500">
							{errors.phone[0]}
						</p>
					)}
				</div>

				<div className="space-y-1">
					<Input
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:text-zinc-100 dark:bg-transparent"
						name="password"
						placeholder="Sua senha"
						type="password"
						disabled={isPending}
						id="password"
						aria-label="Senha"
					/>
					{errors?.password && (
						<p className="text-xs font-medium text-red-500">
							{errors.password[0]}
						</p>
					)}
				</div>

				<div className="space-y-1">
					<Input
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:text-zinc-100 dark:bg-transparent"
						name="password_confirmation"
						type="password"
						disabled={isPending}
						placeholder="Confirmar sua senha"
						id="password_confirmation"
						aria-label="Confirmação da senha"
					/>
					{errors?.password_confirmation && (
						<p className="text-xs font-medium text-red-500">
							{errors.password_confirmation[0]}
						</p>
					)}
				</div>

				<p className="text-xs font-light text-zinc-400 py-4">
					Ao criar sua conta, você confirma que leu e concorda com os{' '}
					<a
						href="/auth/terms-of-use"
						className="text-zinc-200 font-semibold hover:underline"
						target="_new"
					>
						termos de uso
					</a>{' '}
					da Vance.
				</p>

				<Button
					className="w-full rounded-full bg-indigo-700 text-zinc-200 hover:bg-zinc-900 dark:hover:bg-indigo-900"
					type="submit"
					disabled={isPending}
				>
					{isPending ? (
						<Loader2 className="size-4 animate-spin" />
					) : (
						'Criar conta'
					)}
				</Button>

				<Button
					className="w-full rounded-lg hover:bg-transparent"
					variant="link"
					size="sm"
					asChild
				>
					<Link
						href="/auth/sign-in"
						className=" text-zinc-100 hover:no-underline"
					>
						Já possui uma conta? Entrar
					</Link>
				</Button>
			</form>
		</div>
	)
}
