'use server'

import { validateCode } from '@/http/validate-code'
import { HTTPError } from 'ky'
import { z } from 'zod'

const codeValidationSchema = z.object({
	code: z.coerce.number(),
	email: z.string()
})

export async function validateCodeEmail(data: FormData) {
	console.log(data)
	const result = codeValidationSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors
		return { success: false, message: null, errors }
	}

	const { code, email } = result.data

	try {
		await validateCode({ code, email })
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
