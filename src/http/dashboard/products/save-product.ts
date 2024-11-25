'use server'

import { api } from '../../api-client'

interface SaveProductPropsRequest {
	title: string
	description: string
	level: string
	type: string
	image: string
	tags: string[]
}

export const saveProduct = async ({
	title,
	description,
	level,
	tags,
	image,
	type
}: SaveProductPropsRequest): Promise<void> => {
	await api
		.put('courses', {
			json: { title, description, level, image, tags, type }
		})
		.json()
}
