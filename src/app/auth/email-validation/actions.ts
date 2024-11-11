'use server'

import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { z } from 'zod'

import { signInWithPassword } from '@/http/sign-in-with-password'

const signInSchema = z.object({
	credential: z.string().min(1, {
		message: 'Por favor, digite seu login.'
	}),
	password: z.string().min(1, {
		message: 'Por favor, digite sua senha'
	})
})

export async function signInWithEmailAndPassword(data: FormData) {
	const result = signInSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors
		return { success: false, message: null, errors }
	}

	const { credential, password } = result.data

	try {
		const { token, refreshToken } = await signInWithPassword({
			credential,
			password
		})

		const cookieStore = await cookies()
		cookieStore.set('token', token, {
			path: '/'
		})

		cookieStore.set('refreshToken', refreshToken, {
			path: '/',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		})
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
