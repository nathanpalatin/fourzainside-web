'use server'
import { api } from './api-client'

interface SignInWithPasswordRequest {
	credential: string
	password: string
}

type User = {
	name: string
	email: string
	role: string
	avatar: string
}

interface SignInWithPasswordResponse {
	token: string
	refreshToken: string
	user: User
}

export async function signInWithPassword({
	credential,
	password
}: SignInWithPasswordRequest) {
	const result = await api
		.post('users/login', { json: { credential, password } })
		.json<SignInWithPasswordResponse>()

	return result
}
