'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { changePassword } from '@/http/change-password'

const resetPassswordSchema = z
	.object({
		credential: z.string(),
		password: z
			.string()
			.min(6, { message: 'A senha deve conter no mínimo 6 caractéres.' }),
		password_confirmation: z.string()
	})
	.refine(data => data.password === data.password_confirmation, {
		message: 'As senhas não conferem.',
		path: ['password_confirmation']
	})

export async function ResetPasswordAction(data: FormData) {
	const result = resetPassswordSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors

		return { success: false, message: null, errors }
	}

	const { credential, password } = result.data

	try {
		await changePassword({
			credential,
			password
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
