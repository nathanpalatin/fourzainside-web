import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { XIcon } from 'lucide-react'
import Image from 'next/image'
export function Ensign() {
	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Image
					alt=""
					className="size-14 object-cover"
					src="https://i.ibb.co/Svv8RRj/Badge-Conversion.png"
					width={80}
					height={80}
				/>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-zinc-900 rounded border-zinc-800 ">
				<Image
					alt=""
					className="z-50 mx-auto self-center size-18 object-cover"
					src="https://i.ibb.co/Svv8RRj/Badge-Conversion.png"
					width={240}
					height={240}
				/>
				<AlertDialogCancel className="border-none absolute right-0">
					<XIcon className="text-zinc-400" />
				</AlertDialogCancel>
				<AlertDialogHeader>
					<AlertDialogTitle className="text-center">
						Parabéns, você é um Maratonista Raiz!
						<p className="text-sm text-zinc-500">
							Data do recebimento: 14.11.2024
						</p>
					</AlertDialogTitle>

					<AlertDialogDescription className="text-center pt-4 text-zinc-200">
						Não saiu da frente da tela e assistiu aulas sem parar
					</AlertDialogDescription>
				</AlertDialogHeader>
			</AlertDialogContent>
		</AlertDialog>
	)
}
