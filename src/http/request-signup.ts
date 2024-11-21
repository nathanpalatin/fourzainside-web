'use server'

import { api } from './api-client'

interface SignUpRequest {
	name: string
	email: string
	phone: string
	type: string
	call: string
}

interface SignUpResponse {
	userId: string
}

export async function requestSignUp({
	name,
	email,
	phone,
	type,
	call
}: SignUpRequest): Promise<SignUpResponse> {
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
