'use server'
import { api } from './api-client'

interface GetCourseResponse {
	courses: {
		id: string
		title: string
		slug: string
		description: string
		image: string
		tags: string[]
		level: string
		duration: string
		type: string
		user: {
			name: string
			username: string
			avatar: string
		}
	}[]
}

export async function getCourses() {
	const courses = await api.get(`courses`).json<GetCourseResponse>()
	return courses
}
