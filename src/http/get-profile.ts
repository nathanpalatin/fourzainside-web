'use server'

import { api } from './api-client'

interface GetProfileResponse {
	user: {
		id: string
		name: string | null
		role: string
		avatar: string | null
	}
}

export async function getProfile() {
	const user = await api.get(`profile`).json<GetProfileResponse>()
	return user
}
