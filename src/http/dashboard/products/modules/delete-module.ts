'use server'

import { api } from '@/http/api-client'

export const deleteModule = async (id: string): Promise<void> => {
	await api.delete(`modules/${id}`).json()
}
