'use server'

import { validateCode } from '@/http/validate-code'
import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { z } from 'zod'

const codeValidationSchema = z.object({
	code: z.string().min(4, {
		message: 'O código tem no mínimo 4 dígitos'
	}),
	userId: z.string()
})

export async function validateCodeEmail(data: FormData) {
	const result = codeValidationSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors
		return { success: false, message: null, errors }
	}

	const { code, userId } = result.data

	try {
		await validateCode({ code, userId })
	} catch (err) {
		if (err instanceof HTTPError) {
			const { message } = await err.response.json()
			return { success: false, message, errors: null }
		}

		console.error(err)
		return {
			success: false,
			message: 'Um erro inesperado aconteceu, tente novamente mais tarde.',
			errors: null
		}
	}

	return { success: true, message: null, errors: null }
}
