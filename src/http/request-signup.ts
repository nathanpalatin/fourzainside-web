'use server'

import { api } from './api-client'

interface requestSignUpRequest {
	name: string
	email: string
	phone: string
	type: string
	call: string
}

export async function requestSignUp({
	name,
	email,
	phone,
	type,
	call
}: requestSignUpRequest): Promise<void> {
	const response = await api.post('users/request', {
		json: {
			name,
			email,
			phone,
			type,
			call
		}
	})
	return response.json()
}
