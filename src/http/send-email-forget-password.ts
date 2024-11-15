'use server'

import { api } from './api-client'

interface SignUpRequest {
	credential: string
}

export async function sendEmailPassword({
	credential
}: SignUpRequest): Promise<void> {
	const response = await api.post('users/password', {
		json: {
			credential
		}
	})
	return response.json()
}
