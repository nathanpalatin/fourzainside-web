'use server'
import { api } from './api-client'

interface ConfirmCodeEmailRequest {
	code: number
	email: string
}

export const validateCode = async ({
	code,
	email
}: ConfirmCodeEmailRequest): Promise<void> => {
	await api.post('users/validate-account', {
		json: { code, email }
	})
}
