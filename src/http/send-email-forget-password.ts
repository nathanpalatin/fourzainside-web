'use server'

import { api } from './api-client'

interface sendEmailPasswordRequest {
	credential: string
}

export async function sendEmailPassword({
	credential
}: sendEmailPasswordRequest): Promise<void> {
	await api.post('users/password', {
		json: {
			credential
		}
	})
}
