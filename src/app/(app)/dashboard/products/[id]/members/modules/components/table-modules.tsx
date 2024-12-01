'use client'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import {
	SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

import { Skeleton } from '@/components/ui/skeleton'

import { getModules } from '@/http/dashboard/products/modules/get-modules'
import { columns } from './data-table'

export function TableModules() {
	const { id } = useParams<{ id: string }>()

	const { data, isLoading } = useQuery({
		queryKey: ['modules', id],
		queryFn: async () => await getModules(id)
	})

	const [sorting, setSorting] = useState<SortingState>([])

	const table = useReactTable({
		data: data ?? [],
		columns,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting
		}
	})

	if (isLoading) {
		return (
			<div className="w-full">
				<div className="flex items-center py-4">
					<Input
						placeholder="Pesquisar..."
						value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
						onChange={event =>
							table.getColumn('title')?.setFilterValue(event.target.value)
						}
						className="max-w-sm rounded border-zinc-700 pt-3"
					/>
				</div>
				<div className="space-y-1 mb-4">
					<Skeleton className="rounded bg-zinc-800 h-10 " />
					<Skeleton className="rounded bg-zinc-800 h-10 " />
					<Skeleton className="rounded bg-zinc-800 h-10 " />
					<Skeleton className="rounded bg-zinc-800 h-10 " />
					<Skeleton className="rounded bg-zinc-800 h-10 " />
					<Skeleton className="rounded bg-zinc-800 h-10 " />
					<Skeleton className="rounded bg-zinc-800 h-10 " />
				</div>
			</div>
		)
	}

	return (
		<div className="w-full">
			<div className="flex items-center py-4">
				<Input
					placeholder="Pesquisar..."
					value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
					onChange={event =>
						table.getColumn('title')?.setFilterValue(event.target.value)
					}
					className="max-w-sm rounded border-zinc-700 pt-3"
				/>
			</div>
			<div className="rounded bg-zinc-950/20 border-zinc-700 border">
				<Table>
					<TableBody>
						{isLoading && (
							<TableRow className="border-none">
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									<Skeleton className="w-full h-12 bg-zinc-800 rounded" />
								</TableCell>
							</TableRow>
						)}
						{table.getRowModel().rows.length === 0 && (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center text-zinc-400"
								>
									sem módulos.
								</TableCell>
							</TableRow>
						)}
						{table.getRowModel().rows?.length
							? table.getRowModel().rows.map(row => (
									<TableRow
										className="border-zinc-700 border"
										key={row.id}
										data-state={row.getIsSelected() && 'selected'}
									>
										{row.getVisibleCells().map(cell => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										))}
									</TableRow>
							  ))
							: table.getRowModel().rows.length > 0 && (
									<TableRow>
										<TableCell
											colSpan={columns.length}
											className="h-24 text-center text-zinc-400"
										>
											sem resultado.
										</TableCell>
									</TableRow>
							  )}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						className="pt-1 rounded border-zinc-700"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Anterior
					</Button>
					<Button
						variant="outline"
						size="sm"
						className="pt-1 rounded border-zinc-700"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Próximo
					</Button>
				</div>
			</div>
		</div>
	)
}
