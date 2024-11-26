'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { PiIcon } from 'lucide-react'

export function DropdownMembers() {
	const { id } = useParams<{ id: string }>()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className="flex group items-center gap-3 outline-none"
			>
				<Button className="text-zinc-500 rounded py-5 border px-4 data-[current=true]:text-zinc-100">
					<div className="flex gap-2">
						<PiIcon className="size-4" />
						<h1 className="text-sm font-semibold">Área de membros</h1>
					</div>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="start"
				className="w-full border bg-zinc-900 border-zinc-800"
			>
				<DropdownMenuItem asChild>
					<Link
						href={`/dashboard/products/${id}/members`}
						className="cursor-pointer"
					>
						Módulos
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
