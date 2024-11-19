'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from '@/hooks/use-form-state'
import { validateCodeEmail } from './actions'

export function EmailForm() {
	const router = useRouter()

	const params = useSearchParams()

	const confirmEmail = params.get('confirmation')

	const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
		validateCodeEmail,
		() => {
			router.push('/auth/sign-in?confirm=true')
		}
	)

	return (
		<div className="w-[340px]">
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

				<h1 className="text-sm font-normal text-zinc-800 dark:text-zinc-400">
					Enviamos um código para o{' '}
					<span className="text-zinc-100">seu e-mail</span> para confirmar a sua
					conta.
				</h1>
				<div className="items-center justify-center">
					<input type="hidden" id="email" name="email" value={confirmEmail} />
					<Input
						name="code"
						placeholder="Código enviado"
						id="code"
						maxLength={4}
						className="rounded-xl border-2 text-center text-sm border-zinc-500/40 bg-zinc-200/60 px-4 py-5  text-zinc-700 dark:bg-transparent dark:text-white"
					/>

					{errors?.code && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
							{errors.code[0]}
						</p>
					)}
				</div>
				<Button
					className="w-full rounded bg-indigo-600 text-zinc-200 hover:bg-indigo-700"
					type="submit"
					disabled={isPending}
				>
					{isPending ? <Loader2 className="size-4 animate-spin" /> : 'Enviar'}
				</Button>
			</form>
		</div>
	)
}
