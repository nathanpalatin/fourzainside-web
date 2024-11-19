import { FormEvent, useState } from 'react'
import { z } from 'zod'

interface FormState {
	success: boolean
	message: string | null
	errors: Record<string, string[]> | null
}

const passwordSchema = z
	.object({
		password: z
			.string()
			.min(6, { message: 'A senha atual deve ter pelo menos 6 caracteres' }),
		newPassword: z
			.string()
			.min(6, { message: 'A nova senha deve ter pelo menos 6 caracteres' }),
		confirmPassword: z.string().min(6, {
			message: 'A confirmação da senha deve ter pelo menos 6 caracteres'
		})
	})
	.refine(data => data.newPassword === data.confirmPassword, {
		message: 'As senhas não coincidem',
		path: ['confirmPassword']
	})

export function useFormSecondState(
	action: (data: FormData) => Promise<FormState>
) {
	const [isPending, setIsPending] = useState(false)
	const [formState, setFormState] = useState<FormState>({
		success: false,
		message: null,
		errors: null
	})
	const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>(
		{}
	)

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const form = new FormData(event.currentTarget)

		const formData = Object.fromEntries(form) as Record<string, string>

		const parsed = passwordSchema.safeParse(formData)

		if (!parsed.success) {
			const errors = parsed.error.issues.reduce((acc, issue) => {
				acc[issue.path[0]] = issue.message
				return acc
			}, {} as { [key: string]: string })

			setErrorMessages(errors)
			return
		}

		setIsPending(true)

		try {
			const result = await action(form)
			setFormState(result)
			setErrorMessages({})
			return result
		} catch (error) {
			const errorState = {
				success: false,
				message: 'Erro ao processar o formulário.',
				errors: null
			}
			setFormState(errorState)
			return errorState
		} finally {
			setIsPending(false)
		}
	}

	return { formState, handleSubmit, isPending, errorMessages }
}
