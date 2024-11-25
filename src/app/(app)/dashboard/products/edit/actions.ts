'use server'

import { saveProduct } from '@/http/dashboard/products/save-product'
import { uploadFile } from '@/http/upload-file'
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
	tags: z.any(),
	image: z.string({
		message: 'Por favor, insira uma imagem.'
	})
})

export async function editProduct(data: FormData) {
	const validationResult = newProductSchema.safeParse(Object.fromEntries(data))

	if (!validationResult.success) {
		const errors = validationResult.error.flatten().fieldErrors
		return { success: false, message: null, errors }
	}

	const { title, description, type, level, tags, image } = validationResult.data

	try {
		await saveProduct({
			title,
			description,
			level,
			tags,
			image,
			type
		})

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
