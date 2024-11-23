'use server'
import { api } from './api-client'

interface UploadFileResponse {
	url: string
}

export async function uploadFile({
	file
}: {
	file: File
}): Promise<UploadFileResponse> {
	const formData = new FormData()
	formData.append('file', file)

	const response = await api.post('uploads', {
		body: formData
	})

	return response.json()
}
