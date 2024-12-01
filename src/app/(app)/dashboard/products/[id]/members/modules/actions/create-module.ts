'use server'

import { createModule } from '@/http/dashboard/products/modules/create-module'
import { HTTPError } from 'ky'
import { z } from 'zod'

const newProductSchema = z.object({
	title: z.string().min(4, { message: 'Por favor, insira um título válido.' }),
	description: z.string().min(3, {
		message: 'Por favor, insira uma descrição com no mínino de 3 caracteres.'
	}),
	courseId: z.string(),
	visibility: z.string(),
	available: z.string({
		message: 'Por favor, insira uma data para disponilizar.'
	})
})

export async function createModuleAction(data: FormData) {
	const result = newProductSchema.safeParse(Object.fromEntries(data))

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors
		return { success: false, message: null, errors }
	}

	const { title, description, courseId, available, visibility } = result.data

	try {
		await createModule({ title, description, courseId, available, visibility })

		return {
			success: true,
			message: 'Modulo registrado com sucesso!',
			errors: null
		}
	} catch (err) {
		if (err instanceof HTTPError) {
			const { message } = await err.response.json()
			return { success: false, message, errors: null }
		}

		console.error('Erro inesperado:', err)
		return {
			success: false,
			message: 'Ocorreu um erro inesperado, tente novamente mais tarde.',
			errors: null
		}
	}
}
