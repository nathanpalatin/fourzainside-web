'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { updateAccount } from '@/http/update-account'

const updateAccountSchema = z.object({
	name: z.string(),
	cpf: z.string(),
	phone: z.string(),
	gender: z.string(),
	birthdate: z.string(),
	address: z.string()
})

export async function UpdateAccountAction(data: FormData) {
	const result = updateAccountSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors

		return { success: false, message: null, errors }
	}

	const { name, cpf, birthdate, phone, gender, address } = result.data

	try {
		await updateAccount({
			name,
			cpf,
			phone,
			gender,
			address,
			birthdate
		})
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
