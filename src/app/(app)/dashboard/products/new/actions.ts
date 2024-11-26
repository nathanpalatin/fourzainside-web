'use server'

import { registerProduct } from '@/http/dashboard/products/register-product'
import { HTTPError } from 'ky'
import { z } from 'zod'

const newProductSchema = z.object({
	title: z.string().min(4, { message: 'Por favor, insira um título válido.' }),
	description: z.string().min(100, {
		message: 'Por favor, insira uma descrição com no mínino de 100 caracteres.'
	}),
	level: z.string({
		message: 'Por favor, insira um nível de dificuldade.'
	}),
	type: z.string({
		message: 'Por favor, insira uma categoria do seu produto.'
	}),
	tags: z.array(
		z.string().min(1, { message: 'Por favor, insira pelo menos uma tag.' })
	)
})

export async function registerNewProduct(data: FormData) {
	const formDataObject = Object.fromEntries(data)

	formDataObject.tags = formDataObject.tags
		? //@ts-ignore
		  JSON.parse(formDataObject.tags)
		: []

	const result = newProductSchema.safeParse(formDataObject)

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors
		return { success: false, message: null, errors }
	}

	const { title, description, type, level, tags } = result.data

	try {
		await registerProduct({ title, description, level, tags, type })

		return {
			success: true,
			message: 'Produto registrado com sucesso!',
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
