'use server'
import { api } from './api-client'

interface ValidadeCodeRequest {
	code: string
	userId: string
}

interface ValidadeCodeResponse {
	status: boolean
}

export async function validateCode({ code, userId }: ValidadeCodeRequest) {
	/* const result = await api
		.post('users/validation-email', { json: { code, userId } })
		.json<ValidadeCodeResponse>()

	return result */
}
