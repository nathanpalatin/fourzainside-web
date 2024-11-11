'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'

/* import logo from '@/assets/logo.png'
import logoLight from '@/assets/logo-light.png' */
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from '@/hooks/use-form-state'

import { signUpAction } from './actions'

export function SignUpForm() {
	const router = useRouter()

	const [{ errors, message, success }, handleSubmit, isPending] = useFormState(signUpAction, () => {
		router.push('/auth/email-validation')
	})

	return (
		<div className="space-y-4 w-[320px]">
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

				{/* 	<Image
					alt="logo fourzainside"
					className="mx-auto mb-10 block md:hidden"
					width={200}
					priority
					height={100}
					src={theme === 'dark' ? logo : logoLight}
				/>
 */}
				<div className="space-y-1">
					<Input
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:text-zinc-100 dark:bg-transparent"
						name="name"
						placeholder="Seu nome"
						id="name"
					/>

					{errors?.name && <p className="text-xs font-medium text-red-500 ">{errors.name[0]}</p>}
				</div>

				<div className="space-y-1">
					<Input
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:text-zinc-100 dark:bg-transparent "
						name="email"
						placeholder="Seu melhor e-mail"
						type="email"
						id="email"
					/>

					{errors?.email && (
						<p className="text-xs font-medium text-red-500">{errors.email[0]}</p>
					)}
				</div>

				<div className="space-y-1">
					<Input
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:text-zinc-100 dark:bg-transparent"
						name="phone"
						placeholder="Seu melhor telefone"
						type="tel"
						id="phone"
					/>

					{errors?.phone && (
						<p className="text-xs font-medium text-red-500">{errors.phone[0]}</p>
					)}
				</div>

				<div className="space-y-1">
					<Input
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:text-zinc-100 dark:bg-transparent"
						name="password"
						placeholder="Sua senha"
						type="password"
						id="password"
					/>

					{errors?.password && (
						<p className="text-xs font-medium text-red-500 ">{errors.password[0]}</p>
					)}
				</div>

				<div className="space-y-1">
					<Input
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:text-zinc-100 dark:bg-transparent"
						name="password_confirmation"
						type="password"
						placeholder="Confirmar sua senha"
						id="password_confirmation"
					/>

					{errors?.password_confirmation && (
						<p className="text-xs font-medium text-red-500 ">{errors.password_confirmation[0]}</p>
					)}
				</div>

				<p className='text-xs font-light text-muted-foreground py-4'>Ao criar sua conta, você confirma que leu e concorda com os <a href="terms-of-use" className='text-zinc-200 hover:underline' target='_new'>termos de uso</a> da Fourza Inside.</p>

				<Button
					className="w-full rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-950 dark:hover:bg-zinc-900"
					type="submit"
					disabled={isPending}
				>
					{isPending ? <Loader2 className="size-4 animate-spin" /> : 'Criar conta grátis'}
				</Button>

				<Button
					className="w-full rounded-lg text-zinc-500  hover:bg-transparent "
					variant="link"
					size="sm"
					asChild
				>

					<Link href="/auth/sign-in" className=" text-sm hover:no-underline">
						Já tem conta? Entrar
					</Link>
				</Button>

			</form>
		</div>
	)
}
