'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { requestSignUp } from '@/http/request-signup'

const signUpSchema = z.object({
	name: z.string().refine(value => value.split(' ').length > 1, {
		message: 'Por favor, insira seu nome completo'
	}),
	email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
	phone: z
		.string()
		.min(10, { message: 'Por favor, insira um telefone válido.' }),
	type: z
		.string()
		.min(6, { message: 'A senha deve conter no mínimo 6 caractéres.' }),
	call: z.string().optional()
})

export async function requestSignUpAction(data: FormData) {
	const result = signUpSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors

		return { success: false, message: null, errors }
	}

	const { name, email, phone, type, call } = result.data

	try {
		await requestSignUp({
			name,
			email,
			phone,
			type,
			call
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
