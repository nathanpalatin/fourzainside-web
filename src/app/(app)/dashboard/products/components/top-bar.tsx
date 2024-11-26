'use client'

import { NavLink } from '../../../components/nav-links'
import { NetworkIcon, NotebookTabs } from 'lucide-react'
import { useParams } from 'next/navigation'
import { DropdownMembers } from './dropdown-members'
export function TopbarProduct() {
	const idProduct = useParams<{ id: string }>()
	const links = [
		{
			href: `/dashboard/products/${idProduct.id}/settings`,
			label: 'Configurações',
			Icon: NetworkIcon
		}
	]

	return (
		<div className="flex justify-between mb-4 items-start w-full overflow-y-scroll">
			<div className="flex items-center space-x-2">
				<DropdownMembers />
				{links.map(({ href, label, Icon }) => (
					<NavLink
						key={href}
						href={href}
						className="text-zinc-500 rounded py-2 border px-4 data-[current=true]:text-zinc-100"
					>
						<div className="flex gap-2">
							<Icon className="size-4" />
							<h1 className="text-sm font-semibold">{label}</h1>
						</div>
					</NavLink>
				))}
			</div>
		</div>
	)
}
