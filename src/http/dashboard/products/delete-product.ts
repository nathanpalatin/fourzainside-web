'use server'

import { api } from '@/http/api-client'

export const deleteProduct = async (idProduct: string): Promise<void> => {
	await api.delete(`courses/${idProduct}`)
}
