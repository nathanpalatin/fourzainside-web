'use server'

import { api } from './api-client'

interface GetLessonsResponse {
	lesson: {
		id: string
		title: string
		slug: string
		description: string
		duration: number
		watched: boolean
		classification: string
		content: string
		video: string
		cover?: string | null
		transcription?: string | null
	}
}

export async function getLessonsFromCourse(slug: string) {
	const lessons = await api.get(`lessons/${slug}`).json<GetLessonsResponse>()
	return lessons
}
