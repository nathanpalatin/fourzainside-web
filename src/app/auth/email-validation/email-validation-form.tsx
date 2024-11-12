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
import { validateCodeEmail } from './actions'

interface TokenProps {
	token: string
}

export function EmailForm({ token }: TokenProps) {
	const router = useRouter()

	const { theme } = useTheme()

	const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
		validateCodeEmail,
		() => {
			router.push('/')
		}
	)

	return (
		<div className="w-[260px]">
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

				{/* {theme && (
					<Image
						alt="logo mentor"
						className="mx-auto mb-10 block md:hidden"
						width={200}
						priority
						height={100}
						src={theme === 'dark' ? logo : logoLight}
					/>
				)} */}

				<h1 className="text-sm font-normal text-zinc-800 dark:text-zinc-400">Enviamos um código para o <span className='text-zinc-100'>seu e-mail</span> para validarmos a sua conta.</h1>
				<div className="items-center justify-center">
					<Input
						name="code"
						placeholder="Código enviado"
						id="code"
						maxLength={4}
						className="rounded-xl border-2 text-center text-sm border-zinc-500/40 bg-zinc-200/60 px-4 py-5  text-zinc-700 dark:bg-transparent dark:text-white"
					/>

					<input type='hidden' value={token} name='userId' />

					{errors?.code && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">{errors.code[0]}</p>
					)}
				</div>



				<Button
					className="w-full rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-900"
					type="submit"
					disabled={isPending}
				>
					{isPending ? <Loader2 className="size-4 animate-spin" /> : 'Enviar'}
				</Button>


			</form>

		</div>
	)
}
