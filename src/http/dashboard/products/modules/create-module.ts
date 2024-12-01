'use server'

import { api } from '@/http/api-client'

interface ProductPropsRequest {
	title: string
	description: string
	available: string
	visibility: string
	courseId: string
}

export const createModule = async ({
	title,
	description,
	available,
	courseId
}: ProductPropsRequest): Promise<void> => {
	await api
		.post('modules', {
			json: { title, description, available, visibility: true, courseId }
		})
		.json()
}
