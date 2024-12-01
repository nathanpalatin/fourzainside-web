'use server'

import { api } from '@/http/api-client'

export interface ModulesPropsResponse {
	modules: {
		id: string
		title: string
		description: string
		available: string
		visibility: boolean
		courseId: string
		lessons: {
			id: string
			title: string
			description: string
			slug: string
			cover?: string
		}[]
	}[]
}

export const getModules = async (id: string) => {
	const { modules } = await api
		.get(`modules/${id}`)
		.json<ModulesPropsResponse>()

	return modules
}
