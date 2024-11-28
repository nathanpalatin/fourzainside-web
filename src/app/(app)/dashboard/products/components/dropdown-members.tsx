'use client'
import { useParams } from 'next/navigation'
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent
} from '@/components/ui/accordion'
import { UsersRoundIcon } from 'lucide-react'
import { NavLink } from '@/app/(app)/components/nav-links'

export function AccordionMembers() {
	const { id } = useParams<{ id: string }>()

	return (
		<Accordion type="single" defaultValue="members" collapsible>
			<AccordionItem
				value="members"
				className="border border-zinc-700 bg-zinc-900 rounded px-3"
			>
				<AccordionTrigger className="flex items-center gap-3">
					<NavLink
						href={`/dashboard/products/${id}`}
						className="text-zinc-500 rounded data-[current=true]:text-zinc-100"
					>
						<div className="flex items-center gap-2">
							<UsersRoundIcon className="size-4" />
							<h1 className="text-sm pt-1 font-semibold">Área de membros</h1>
						</div>
					</NavLink>
				</AccordionTrigger>
				<AccordionContent className="pl-6">
					<ul className="space-y-2">
						<li>
							<NavLink
								href={`/dashboard/products/${id}/members?tab=modules`}
								matchQueryParams
								className="text-sm text-zinc-500 hover:text-zinc-100 data-[current=true]:text-zinc-100"
							>
								Módulos
							</NavLink>
						</li>
						<li>
							<NavLink
								href={`/dashboard/products/${id}/members?tab=students`}
								matchQueryParams
								className="text-sm text-zinc-500 hover:text-zinc-100 data-[current=true]:text-zinc-100"
							>
								Alunos
							</NavLink>
						</li>
						<li>
							<NavLink
								matchQueryParams
								href={`/dashboard/products/${id}/members?tab=comments`}
								className="text-sm text-zinc-500 hover:text-zinc-100 data-[current=true]:text-zinc-100"
							>
								Comentários
							</NavLink>
						</li>
						<li>
							<NavLink
								matchQueryParams
								href={`/dashboard/products/${id}/members?tab=preferences`}
								className="text-sm text-zinc-500 hover:text-zinc-100 data-[current=true]:text-zinc-100"
							>
								Preferências
							</NavLink>
						</li>
						<li>
							<NavLink
								matchQueryParams
								href={`/dashboard/products/${id}/members?tab=certificates`}
								className="text-sm text-zinc-500 hover:text-zinc-100 data-[current=true]:text-zinc-100"
							>
								Certificados
							</NavLink>
						</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
