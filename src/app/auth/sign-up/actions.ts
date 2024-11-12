'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { signUp } from '@/http/sign-up'
import { cookies } from 'next/headers'
import { generateCode, generateShortCode } from '@/lib/functions'
import { isValidPhoneNumber } from 'react-phone-number-input'

const signUpSchema = z
	.object({
		name: z.string().refine(value => value.split(' ').length > 1, {
			message: 'Por favor, insira seu nome completo'
		}),
		email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
		phone: z.string().refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
		password: z.string().min(6, { message: 'A senha deve conter no mínimo 6 caractéres.' }),
		password_confirmation: z.string()
	})
	.refine(data => data.password === data.password_confirmation, {
		message: 'As senhas não conferem.',
		path: ['password_confirmation']
	})

export async function signUpAction(data: FormData) {
	const result = signUpSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors

		return { success: false, message: null, errors }
	}

	const { name, email, phone, password } = result.data
	const cookieStore = await cookies()

	try {
		const { userId } = await signUp({
			name,
			email,
			phone,
			password
		})

		const randomToken = generateShortCode()

		const token = cookieStore.set('tokenEmail', randomToken, {
			path: '/auth/email-validation'
		})

		/* 	await registerCodeValidation({
			userId,
			code: generateCode(),
			token
		}) */
	} catch (err) {
		if (err instanceof HTTPError) {
			const { message } = await err.response.json()

			return { success: false, message, errors: null }
		}

		console.error(err)

		return {
			success: false,
			message: 'Unexpected error, try again in a few minutes.',
			errors: null
		}
	}

	return { success: true, message: null, errors: null }
}
