'use client'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

import { Skull } from 'lucide-react'

import { deleteProduct } from '@/http/dashboard/products/delete-product'
import { useParams, useRouter } from 'next/navigation'

export function DeleteProduct() {
	const { id } = useParams<{ id: string }>()
	const router = useRouter()

	return (
		<>
			<h1 className="text-lg flex items-center gap-2 text-zinc-100">
				<Skull className="text-zinc-500" size={24} /> Excluir produto
			</h1>
			<p className="pt-4">
				Se você excluir seu produto, todos os dados relacionados a ele serão
				deletados e não será possível a restauração.
			</p>

			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button className="flex mt-5 bg-red-700 rounded text-sm hover:bg-red-800 transition-all">
						Excluir produto
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent className="bg-zinc-900 rounded border-zinc-800 ">
					<AlertDialogHeader>
						<AlertDialogTitle>Você tem certeza mesmo?</AlertDialogTitle>
						<AlertDialogDescription>
							<strong>Último aviso:</strong> Esta ação não pode ser desfeita.
							Isso excluirá permanentemente seu produto e removerá seus dados de
							nossos servidores.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel className="border-none">
							Não, cancelar.
						</AlertDialogCancel>
						<form
							action={() => {
								deleteProduct(id)
								router.replace('/dashboard/products')
							}}
						>
							<AlertDialogAction
								type="submit"
								className="bg-red-600 hover:bg-red-700 rounded-xl text-sm"
							>
								Sim, excluir.
							</AlertDialogAction>
						</form>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	)
}
