'use server'

import { z } from 'zod'
import { HTTPError } from 'ky'

const paymentSchema = z.object({
	name: z.string().refine(value => value.split(' ').length > 1, {
		message: 'Por favor, insira seu nome completo'
	})
})

export async function paymentAction(data: FormData) {
	const result = paymentSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors

		return { success: false, message: null, errors }
	}

	try {
		// await apiPayment()
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
