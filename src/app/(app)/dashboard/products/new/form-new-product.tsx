'use client'

import { useState } from 'react'
import { useFormState } from '@/hooks/use-form-state'
import { AlertTriangle, Check, ChevronsUpDown, Loader2 } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { registerNewProduct } from './actions'
import { Textarea } from '@/components/ui/textarea'

import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Switch } from '@/components/ui/switch'

export function FormNewProduct() {
	const [{ errors, message, success }, handleSubmit, isPending] =
		useFormState(registerNewProduct)

	const [imagePreview, setImagePreview] = useState<string | null>(null)
	const [tags, setTags] = useState<string[]>([])
	const [tagInput, setTagInput] = useState<string>('')
	const [open, setOpen] = useState(false)
	const [switchT, setSwitch] = useState(false)
	const [value, setValue] = useState('')

	const options = [
		{
			value: 'easy',
			label: 'Iniciante'
		},
		{
			value: 'medium',
			label: 'Intermediário'
		},
		{
			value: 'advanced',
			label: 'Avançado'
		}
	]

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const previewUrl = URL.createObjectURL(file)
			setImagePreview(previewUrl)
		} else {
			setImagePreview(null)
		}
	}

	const handleTagInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTagInput(event.target.value)
	}

	const addTag = () => {
		if (tagInput.trim() && !tags.includes(tagInput.trim())) {
			setTags(prev => [...prev, tagInput.trim()])
		}
		setTagInput('')
	}

	const removeTag = (tag: string) => {
		setTags(prev => prev.filter(t => t !== tag))
	}

	const handleTagKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === ',' || event.key === 'Enter') {
			event.preventDefault()
			addTag()
		}
	}

	return (
		<form className="mt-4" onSubmit={handleSubmit}>
			{!success && message && (
				<Alert variant="destructive">
					<AlertTriangle className="size-4" />
					<AlertTitle>Ops, algo deu errado!</AlertTitle>
					<AlertDescription>
						<p>{message}</p>
					</AlertDescription>
				</Alert>
			)}

			<div className="grid grid-cols-2 gap-8 w-full">
				<div className="w-[550px] space-y-4">
					<Input
						name="title"
						placeholder="Nome do produto"
						id="title"
						className="rounded-xl w-full border-2 text-sm border-zinc-500/40 bg-zinc-200/60 px-3 py-6 text-zinc-700 dark:bg-transparent dark:text-white"
					/>
					{errors?.title && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
							{errors.title[0]}
						</p>
					)}
					<Textarea
						name="description"
						placeholder="Descrição do produto"
						id="description"
						className="rounded-xl w-full border-2 text-sm border-zinc-500/40 bg-zinc-200/60 px-3 h-28 resize-none text-zinc-700 dark:bg-transparent dark:text-white"
					/>
					{errors?.description && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
							{errors.description[0]}
						</p>
					)}

					<Input
						name="type"
						placeholder="Categoria (ex: Liderança, emagrecimento, vendas)"
						id="type"
						className="rounded-xl w-full border-2 text-sm border-zinc-500/40 bg-zinc-200/60 px-3 py-6 text-zinc-700 dark:bg-transparent dark:text-white"
					/>
					{errors?.type && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
							{errors.type[0]}
						</p>
					)}
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={open}
								className="w-[300px] rounded-xl border-2 border-zinc-700 justify-between"
							>
								{value
									? options.find(opt => opt.value === value)?.label
									: 'Selecione o nível...'}
								<ChevronsUpDown className="opacity-50" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-[300px] rounded border-zinc-600 bg-zinc-900 p-0">
							<Command>
								<CommandList className="w-full">
									<CommandGroup>
										{options.map(opt => (
											<CommandItem
												key={opt.value}
												value={opt.value}
												onSelect={currentValue => {
													setValue(currentValue === value ? '' : currentValue)
													setOpen(false)
												}}
											>
												{opt.label}
												<Check
													className={cn(
														'ml-auto',
														value === opt.value ? 'opacity-100' : 'opacity-0'
													)}
												/>
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>
					{errors?.level && (
						<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
							{errors.level[0]}
						</p>
					)}
					<input type="hidden" name="level" value={value} />
					<Input
						id="tags"
						name="tags"
						placeholder="Adicione tags relacionada ao seu produto"
						value={tagInput}
						onChange={handleTagInput}
						onKeyDown={handleTagKeyDown}
						className="rounded-xl w-full border-2 text-sm border-zinc-500/40 bg-zinc-200/60 px-3 py-6 text-zinc-700 dark:bg-transparent dark:text-white"
					/>
					<div className="flex flex-wrap gap-2 mt-2">
						{tags.map(tag => (
							<span
								key={tag}
								className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-zinc-700 bg-zinc-300 rounded-full dark:bg-zinc-800 dark:text-white"
							>
								{tag}
								<button
									type="button"
									onClick={() => removeTag(tag)}
									className="text-red-500 hover:text-red-700"
								>
									&times;
								</button>
								<input type="hidden" name="tags" value={tag} />
							</span>
						))}
						{errors?.tags && (
							<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
								{errors.tags[0]}
							</p>
						)}
					</div>

					<Button
						className="w-full mt-4 rounded-xl bg-zinc-800 text-zinc-200 hover:bg-zinc-900"
						type="submit"
						disabled={isPending}
					>
						{isPending ? (
							<Loader2 className="size-4 animate-spin" />
						) : (
							'Cadastrar'
						)}
					</Button>
				</div>

				<div className="flex flex-col space-y-4">
					<div className="flex items-center space-x-3">
						<Switch
							name="private"
							checked={switchT}
							onCheckedChange={() => setSwitch(!switchT)}
						/>
						<h1 className="text-sm">{switchT ? 'Privado' : 'Público'}</h1>
					</div>
					<Input
						name="image"
						type="file"
						accept="image/jpeg,image/png"
						onChange={handleImageChange}
						className="rounded-xl w-full border-2 text-sm border-zinc-500/40 bg-zinc-200/60 px-3 file:text-green-500 dark:bg-transparent dark:text-zinc-400"
					/>
					{errors?.image && (
						<p className="text-xs text-left w-full font-medium text-red-500 dark:text-red-400">
							{errors.image[0]}
						</p>
					)}
					{imagePreview && (
						<div className="w-full flex justify-center">
							<img
								src={imagePreview}
								className="rounded-xl w-full max-w-md h-52 object-cover"
							/>
						</div>
					)}
				</div>
			</div>
		</form>
	)
}
