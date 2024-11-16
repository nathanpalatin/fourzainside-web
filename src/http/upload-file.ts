'use server'
import { api } from './api-client'

interface UploadFileResponse {
	url: string
}

export async function uploadFile({
	image
}: {
	image: File
}): Promise<UploadFileResponse> {
	const formData = new FormData()
	formData.append('file', image)

	const response = await api.post('uploads', {
		body: formData
	})

	return response
}
