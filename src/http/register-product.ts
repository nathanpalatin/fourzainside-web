'use server'

import { api } from './api-client'

interface ProductPropsRequest {
	title: string
	description: string
	level: string
	type: string
	tags: string[]
}

export const registerProduct = async ({
	title,
	description,
	level,
	tags,
	type
}: ProductPropsRequest): Promise<void> => {
	await api
		.post('courses', {
			json: { title, description, level, tags, type }
		})
		.json()
}
