'use client'
import { useState } from 'react'
import dayjs from 'dayjs'

import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CalendarAvaliableModule } from '../[id]/members/modules/components/avaliable-module-input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { createModuleAction } from '../[id]/members/modules/actions/create-module'
import { useParams, useRouter } from 'next/navigation'
import { useFormState } from '@/hooks/use-form-state'

export function DrawerNewModule() {
	const { id } = useParams<{ id: string }>()
	const router = useRouter()

	const [isOpen, setIsOpen] = useState(false)

	const [charactersName, setCharactersName] = useState('')
	const [description, setCharactersDescription] = useState('')
	const [releaseDate, setReleaseDate] = useState<Date | null>(new Date())
	const [{ errors }, handleSubmit, isPending] = useFormState(
		createModuleAction,
		onSuccess
	)

	function onSuccess() {
		router.refresh()
		setIsOpen(false)
	}

	return (
		<Drawer open={isOpen} onOpenChange={setIsOpen}>
			<DrawerTrigger asChild>
				<Button className="bg-green-700 hover:bg-green-800 rounded pt-3">
					Novo Módulo
				</Button>
			</DrawerTrigger>
			<DrawerContent className="border-zinc-800 bg-red-100 rounded-xl">
				<div className="mx-auto w-full max-w-lg pb-4">
					<DrawerHeader>
						<DrawerTitle>Criar Módulo</DrawerTitle>
						<DrawerDescription>
							Crie um grupo para suas aulas.
						</DrawerDescription>
					</DrawerHeader>
					<form onSubmit={handleSubmit}>
						<div className="p-4 pb-0">
							<div className="flex items-center justify-center space-x-2">
								<div className="flex-1 justify-end">
									<input type="hidden" name="courseId" value={id} />
									<input
										type="hidden"
										name="available"
										value={
											releaseDate ? dayjs(releaseDate).format('YYYY-MM-DD') : ''
										}
									/>

									<Input
										placeholder="Nome do módulo"
										name="title"
										maxLength={50}
										onChange={e => setCharactersName(e.target.value)}
										className="border-zinc-700 relative rounded pt-3"
									/>
									<div className="text-sm pt-1 text-right text-gray-600">
										{charactersName.length}/50 caracteres
									</div>
									{errors?.title && (
										<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
											{errors.title[0]}
										</p>
									)}
									<Textarea
										placeholder="Descrição do módulo"
										maxLength={100}
										name="description"
										onChange={e => setCharactersDescription(e.target.value)}
										className="border-zinc-700 relative rounded  mt-4"
									/>
									<div className="text-sm pt-1 text-right text-gray-600">
										{description.length}/100 caracteres
									</div>
									{errors?.description && (
										<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
											{errors.description[0]}
										</p>
									)}
									<div className="flex mt-4 gap-4 justify-between">
										<div>
											<Label>Liberação</Label>
											<CalendarAvaliableModule onDateChange={setReleaseDate} />
										</div>
										{errors?.available && (
											<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
												{errors.available[0]}
											</p>
										)}
										<div className="w-1/2">
											<Label className="text-left">Visibilidade</Label>
											<RadioGroup
												name="visibility"
												className="mt-1 justify-start "
												defaultValue="true"
											>
												<div className="flex items-center justify-around">
													<div className="flex items-end space-x-2">
														<RadioGroupItem value="true" />
														<Label htmlFor="r1">Mostrar</Label>
													</div>

													<div className="ml-7 inline-flex items-end space-x-2">
														<RadioGroupItem value="false" />
														<Label className="" htmlFor="r3">
															Ocultar
														</Label>
													</div>
												</div>
											</RadioGroup>
											{errors?.visibility && (
												<p className="text-xs pt-1 font-medium text-red-500 dark:text-red-400">
													{errors.visibility[0]}
												</p>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
						<DrawerFooter className="mt-4 flex flex-row justify-end">
							<DrawerClose asChild>
								<Button variant="secondary">Cancelar</Button>
							</DrawerClose>
							<Button
								variant="outline"
								disabled={isPending}
								className="pt-3 rounded bg-blue-700 hover:bg-blue-800 border-none"
							>
								Salvar
							</Button>
						</DrawerFooter>
					</form>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
