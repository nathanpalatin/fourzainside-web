'use server'

import { sendEmailPassword } from '@/http/send-email-forget-password'
import { HTTPError } from 'ky'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
	credential: z
		.string()
		.email({ message: 'Por favor, insira um e-mail válido.' })
})
export async function forgotPassword(data: FormData) {
	const result = forgotPasswordSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors

		return { success: false, message: null, errors }
	}

	const { credential } = result.data
	try {
		await sendEmailPassword({ credential })
	} catch (err) {
		if (err instanceof HTTPError) {
			const { message } = await err.response.json()

			return { success: false, message, errors: null }
		}

		console.error(err)

		return {
			success: false,
			message: 'Ocorreu um erro inesperado, tente novamente mais tarde.',
			errors: null
		}
	}
	return { success: true, message: null, errors: null }
}
