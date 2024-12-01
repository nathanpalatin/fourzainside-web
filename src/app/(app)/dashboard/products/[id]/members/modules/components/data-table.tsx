import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { Pencil } from 'lucide-react'
import { DialogDeleteModule } from './dialog-delete-module'

export interface Module {
	id: string
	title: string
	description: string
	available: string
	visibility: boolean
	courseId: string
}

export const columns: ColumnDef<Module>[] = [
	{
		accessorKey: 'id',
		cell: ({ row }) => (
			<div className="capitalize pt-1.5 bg-zinc-500 rounded-full text-center size-7">
				{row.index + 1}
			</div>
		)
	},
	{
		accessorKey: 'title',
		cell: ({ row }) => (
			<div className="  pt-2 text-lg">{row.getValue('title')}</div>
		)
	},

	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="bg-blue-500 hover:bg-blue-600 rounded h-8 w-8 p-0"
						>
							<span className="sr-only">Open menu</span>
							<Pencil size={16} />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="bg-zinc-800 border-zinc-800 rounded"
					>
						<DropdownMenuItem
							asChild
							className="cursor-pointer"
							onClick={() => navigator.clipboard.writeText(row.getValue('id'))}
						></DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild className="cursor-pointer">
							<DialogDeleteModule id={row.getValue('id')} />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		}
	}
]
