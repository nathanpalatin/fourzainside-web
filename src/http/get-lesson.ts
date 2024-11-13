'use server'
import { api } from './api-client'

interface LessonResponse {
	lesson: {
		id: string
		title: string
		slug: string
		description: string
		duration: number
		video: string
		cover: string
		watched: boolean
		classification: number
		course: {
			title: string
		}
	}
}

export const getLesson = async (slug: string) => {
	const lesson = await api.get(`lessons/lesson/${slug}`).json<LessonResponse>()
	return lesson
}
