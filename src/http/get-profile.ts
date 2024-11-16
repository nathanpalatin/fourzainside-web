'use server'

import { api } from './api-client'

interface GetProfileResponse {
	user: {
		id: string
		email: string
		gender: string | null
		birthdate: string | null
		cpf: string | null
		phone: string | null
		name: string
		role: 'ADMIN' | 'MENTOR' | 'USER'
		avatar: string | null
	}
}

export async function getProfile() {
	const user = await api.get(`profile`).json<GetProfileResponse>()
	return user
}
