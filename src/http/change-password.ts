'use server'
import { api } from './api-client'

interface ValidadeCodeRequest {
	credential: string
	password: string
}

export async function changePassword({
	credential,
	password
}: ValidadeCodeRequest): Promise<void> {
	await api.post('users/reset-password', {
		json: { credential, password }
	})
}
