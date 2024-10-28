'use server'

import { api } from './api-client'

enum Role {
	ADMIN = 'admin',
	USER = 'user',
	MENTOR = 'mentor'
}

interface GetMembershipResponse {
	user: {
		id: string
		role: Role
		name: string
		userId: string
	}
}

export async function getMembership() {
	const result = await api.get(`profile`).json<GetMembershipResponse>()
	return result
}
