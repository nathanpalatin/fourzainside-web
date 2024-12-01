'use client'

import { useRouter } from 'next/navigation'

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
import { deleteModule } from '@/http/dashboard/products/modules/delete-module'

interface ModuleProps {
	id: string
}

export function DialogDeleteModule({ id }: ModuleProps) {
	const router = useRouter()

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button>Excluir módulo</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-zinc-900 rounded border-zinc-800 ">
				<AlertDialogHeader>
					<AlertDialogTitle>Você tem certeza mesmo?</AlertDialogTitle>
					<AlertDialogDescription>
						<strong>Último aviso:</strong> Esta ação não pode ser desfeita. Isso
						excluirá permanentemente este módulo e removerá todo o conteúdo que
						está nele.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="border-none">
						Não, cancelar.
					</AlertDialogCancel>
					<form
						action={async () => {
							await deleteModule(id)
							router.refresh()
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
	)
}
