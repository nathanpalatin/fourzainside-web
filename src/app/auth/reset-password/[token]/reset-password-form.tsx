'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useFormState } from '@/hooks/use-form-state'

import { ResetPasswordAction } from './actions'
import { useParams, useRouter } from 'next/navigation'

export function ResetPasswordForm() {
	const { token } = useParams<{ token: string }>()
	const router = useRouter()

	const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
		ResetPasswordAction,
		() => {
			router.push('/auth/sign-in')
		}
	)

	return (
		<div className="space-y-4 w-[340px]">
			<form onSubmit={handleSubmit} className="space-y-4">
				{!success && message && (
					<Alert variant="destructive">
						<AlertTriangle className="size-4" />
						<AlertTitle>Op, algo deu errado!</AlertTitle>
						<AlertDescription>
							<p>{message}</p>
						</AlertDescription>
					</Alert>
				)}

				<div className="space-y-1">
					<input type="hidden" name="credential" value={token} />
					<Input
						className="rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4 py-5 text-zinc-700 dark:text-zinc-100 dark:bg-transparent"
						name="password"
						placeholder="Sua senha"
						type="password"
						id="password"
					/>

					{errors?.password && (
						<p className="text-xs font-medium text-red-500 ">
							{errors.password[0]}
						</p>
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
						<p className="text-xs font-medium text-red-500 ">
							{errors.password_confirmation[0]}
						</p>
					)}
				</div>

				<Button
					className="w-full rounded-xl bg-indigo-700 text-zinc-200 hover:bg-zinc-900 dark:hover:bg-indigo-900"
					type="submit"
					disabled={isPending}
				>
					{isPending ? <Loader2 className="size-4 animate-spin" /> : 'Enviar'}
				</Button>
			</form>
		</div>
	)
}
