'use server'
import { api } from '../../api-client'

interface GetCourseResponse {
	courses: {
		id: string
		title: string
		slug: string
		description: string
		image: string
		status: string
		tags: string[]
		level: string
		type: string
		user: {
			name: string
			username: string
			avatar: string
		}
	}[]
}

export async function getProducts() {
	const courses = await api.get(`courses`).json<GetCourseResponse>()
	return courses
}
