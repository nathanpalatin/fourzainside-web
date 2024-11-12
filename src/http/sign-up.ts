'use server'

import { api } from './api-client'

interface SignUpRequest {
	name: string
	email: string
	phone: string
	password: string
}

interface SignUpResponse {
	userId: string
}

export async function signUp({ name, email, phone, password }: SignUpRequest): Promise<SignUpResponse> {
	const response = await api.post('users', {
		json: {
			name,
			email,
			phone,
			password
		}
	})
	return response.json()
}
