'use server'
import { api } from './api-client'

interface ChangePasswordRequest {
	newPassword: string
	password: string
}

export async function changePassword({
	newPassword,
	password
}: ChangePasswordRequest): Promise<void> {
	await api.patch('users/change-password', {
		json: { newPassword, password }
	})
}
