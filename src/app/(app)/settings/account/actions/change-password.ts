'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { changePassword } from '@/http/change-password'

const changePassswordSchema = z
	.object({
		password: z
			.string()
			.min(6, { message: 'A senha deve conter no mínimo 6 caractéres.' }),
		newPassword: z
			.string()
			.min(6, { message: 'A senha deve conter no mínimo 6 caractéres.' }),
		confirmPassword: z.string()
	})
	.refine(data => data.newPassword === data.confirmPassword, {
		message: 'As senhas não conferem.',
		path: ['confirmPassword']
	})

export async function ChangePasswordAction(data: FormData) {
	const result = changePassswordSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors

		return { success: false, message: null, errors }
	}

	const { newPassword, password } = result.data

	try {
		await changePassword({
			newPassword,
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
