import { ChevronDown, Trash2 } from 'lucide-react'

import { auth } from '@/auth/auth'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export async function DropdownSettings() {
	const { user } = await auth()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className="flex group ml-4 items-center gap-3 outline-none"
			>
				<Button className="border border-zinc-800 text-lg rounded-full text-white ">
					...
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="mt-2 border bg-zinc-900 border-zinc-800"
			>
				<DropdownMenuItem asChild>
					<a href="#" className="cursor-pointer">
						<Trash2 className="mr-2 mb-1 size-4" />
						Excluir produto
					</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
