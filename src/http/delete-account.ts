'use server'
import { api } from './api-client'

export const deleteAccount = async (): Promise<void> => {
	await api.delete('users')
}
