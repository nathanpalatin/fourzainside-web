'use server'

import { registerProduct } from '@/http/register-product'
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
	image: z
		.instanceof(File)
		.refine(file => ['image/jpeg', 'image/png'].includes(file.type), {
			message: 'Por favor, selecione uma imagem JPG ou PNG.'
		})
})

export async function registerNewProduct(data: FormData) {
	const image = data.get('image')
	if (!(image instanceof File)) {
		return {
			success: false,
			message: null,
			errors: { image: ['Arquivo de imagem inválido.'] }
		}
	}

	const validationResult = newProductSchema.safeParse({
		...Object.fromEntries(data),
		image
	})

	if (!validationResult.success) {
		const errors = validationResult.error.flatten().fieldErrors
		return { success: false, message: null, errors }
	}

	const {
		title,
		description,
		type,
		level,
		tags,
		image: validatedImage
	} = validationResult.data

	try {
		const { url } = await uploadFile({ image: validatedImage })

		await registerProduct({
			title,
			description,
			level,
			tags,
			image: url,
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
