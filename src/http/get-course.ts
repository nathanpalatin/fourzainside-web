'use server'
import { api } from './api-client'

interface GetCourseResponse {
	course: {
		id: string
		title: string
		description: string
		image: string
		tags: string[]
		level: string
		duration: string
		type: string
	}
}

export async function getCourseInfo(slug: string) {
	const course = await api.get(`courses/${slug}`).json<GetCourseResponse>()
	return course
}
