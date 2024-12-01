'use server'

import { api } from '@/http/api-client'

export interface ModulesPropsResponse {
	module: {
		id: string
		title: string
		slug: string
		description: string
		available: string
		visibility: boolean
		courseId: string
	}
}

export const getModule = async (id: string) => {
	const module = await api.get(`modules/m/${id}`).json()

	return module
}
