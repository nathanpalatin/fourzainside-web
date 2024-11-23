'use client'
import { FormEvent, useState } from 'react'

import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogCancel
} from '@/components/ui/alert-dialog'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import { Edit3Icon } from 'lucide-react'

export function SocialLinksDialog() {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [formData, setFormData] = useState({
		instagram: '',
		facebook: '',
		youtube: '',
		tiktok: ''
	})
	const [errors, setErrors] = useState({
		instagram: '',
		facebook: '',
		youtube: '',
		tiktok: ''
	})

	const validateURL = (url: string) => {
		const urlPattern = new RegExp(
			/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
		)
		return urlPattern.test(url)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData(prev => ({ ...prev, [name]: value }))
		setErrors(prev => ({ ...prev, [name]: '' }))
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const newErrors: Record<string, string> = {}

		Object.entries(formData).forEach(([key, value]) => {
			if (!value) {
				newErrors[key] = 'Este campo é obrigatório'
			} else if (!validateURL(value)) {
				newErrors[key] = 'URL inválida'
			}
		})

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors)
		} else {
			toast('Links sociais salvos com sucesso.')
			setFormData({ instagram: '', facebook: '', youtube: '', tiktok: '' })
			setIsDialogOpen(false)
		}
	}

	return (
		<AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<AlertDialogTrigger asChild>
				<Button
					className="-mr-3"
					size="icon"
					onClick={() => setIsDialogOpen(true)}
				>
					<Edit3Icon size={18} />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-zinc-900 rounded border-zinc-800">
				<AlertDialogHeader>
					<AlertDialogTitle>Adicionar Redes Sociais</AlertDialogTitle>
					<AlertDialogDescription>
						Insira os links das redes sociais abaixo:
					</AlertDialogDescription>
				</AlertDialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4">
					{['instagram', 'facebook', 'youtube', 'tiktok'].map(field => (
						<div key={field} className="flex flex-col gap-2">
							<Label
								htmlFor={field}
								className="text-sm text-gray-400 capitalize"
							>
								{field}
							</Label>
							<Input
								id={field}
								name={field}
								type="text"
								placeholder={`Adicione o link do seu ${field}`}
								value={formData[field as keyof typeof formData]}
								onChange={handleChange}
								className="rounded-xl border-zinc-700 focus:border-indigo-600 text-white"
							/>
							{errors[field as keyof typeof errors] && (
								<span className="text-red-500 text-sm">
									{errors[field as keyof typeof errors]}
								</span>
							)}
						</div>
					))}
					<Separator className="my-4 bg-zinc-800" />
					<AlertDialogFooter>
						<AlertDialogCancel asChild>
							<Button
								variant="ghost"
								className="rounded-xl text-gray-400"
								onClick={() => setIsDialogOpen(false)}
							>
								Cancelar
							</Button>
						</AlertDialogCancel>
						<Button
							size="default"
							type="submit"
							className="bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white"
						>
							Salvar
						</Button>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
