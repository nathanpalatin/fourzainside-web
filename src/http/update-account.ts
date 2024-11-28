'use server'

import { api } from './api-client'

interface SignUpRequest {
	name: string
	cpf: string
	birthdate: string
	gender: string
	phone: string
	address: string
}

export async function updateAccount({
	name,
	cpf,
	birthdate,
	gender,
	phone,
	address
}: SignUpRequest): Promise<void> {
	const response = await api.put('users', {
		json: {
			name,
			cpf,
			birthdate,
			gender,
			phone,
			address
		}
	})
	return response.json()
}
