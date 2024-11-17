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
import { deleteAccount } from '@/http/delete-account'
import { Skull } from 'lucide-react'

export function DeleteAccount() {
	return (
		<>
			<h1 className="text-lg flex items-center gap-2 text-zinc-100">
				<Skull className="text-zinc-500" size={24} /> Excluir conta
			</h1>
			<p className="pt-4">
				Se você excluir sua conta, todos os dados relacionados a você serão
				deletados e não será possível a restauração.
			</p>
			<span className="text-xs text-zinc-400">
				A exclusão da conta não elimina o recebimento de e-mails da Fourza
				Inside. Para que isso aconteça, peça no news@fourzainside.com.br.
			</span>

			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button className="flex mt-5 bg-red-700 rounded gap-2 text-xs hover:bg-red-800 transition-all">
						Excluir conta
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent className="bg-zinc-900 rounded border-zinc-800 ">
					<AlertDialogHeader>
						<AlertDialogTitle>Você tem certeza mesmo?</AlertDialogTitle>
						<AlertDialogDescription>
							<strong>Último aviso:</strong> Esta ação não pode ser desfeita.
							Isso excluirá permanentemente sua conta e removerá seus dados de
							nossos servidores.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel className="border-none">
							Não, cancelar.
						</AlertDialogCancel>
						<form action={deleteAccount}>
							<AlertDialogAction
								type="submit"
								className="bg-red-600 hover:bg-red-700 rounded text-sm"
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
