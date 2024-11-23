import {
	ChartColumnIncreasing,
	LayoutDashboardIcon,
	MessageCircleHeartIcon,
	NetworkIcon,
	NotebookTabs,
	Settings
} from 'lucide-react'

import { NavLink } from './nav-links'

export function Sidebar() {
	const links = [
		{ href: '/dashboard', label: 'Dashboard', Icon: LayoutDashboardIcon },
		{ href: '/dashboard/sales', label: 'Vendas', Icon: ChartColumnIncreasing },
		{ href: '/dashboard/products', label: 'Produtos', Icon: NotebookTabs },
		{ href: '/dashboard/store', label: 'Store', Icon: NetworkIcon },
		{ href: '/dashboard/finances', label: 'Finanças', Icon: NetworkIcon },
		{ href: '/dashboard/webnario', label: 'Webnário', Icon: NetworkIcon },
		{
			href: '/dashboard/afiliados',
			label: 'Meus afiliados',
			Icon: NetworkIcon
		},
		{ href: '/dashboard/assinaturas', label: 'Assinaturas', Icon: NetworkIcon },
		{ href: '/dashboard/arquivos', label: 'Meus arquivos', Icon: NetworkIcon },
		{ href: '/dashboard/cobrancas', label: 'Cobranças', Icon: NetworkIcon },
		{ href: '/dashboard/aplicacoes', label: 'Aplicações', Icon: NetworkIcon },
		{ href: '/dashboard/relatorios', label: 'Relatórios', Icon: NetworkIcon },
		{ href: '/dashboard/indique', label: 'Indique e ganhe', Icon: NetworkIcon }
	]

	const bottomLinks = [
		{ href: '/suporte', label: 'Suporte', Icon: MessageCircleHeartIcon },
		{ href: '/configuracoes', label: 'Configurações', Icon: Settings }
	]

	return (
		<div className="flex flex-col justify-between items-start ml-8 w-[280px] overflow-y-hidden">
			<div className="flex flex-col items-start space-y-2">
				{links.map(({ href, label, Icon }) => (
					<NavLink
						key={href}
						href={href}
						className="text-zinc-500 data-[current=true]:text-zinc-100"
					>
						<div className="flex gap-2">
							<Icon className="size-4" />
							<h1 className="text-sm font-semibold">{label}</h1>
						</div>
					</NavLink>
				))}
			</div>
			<div className="mt-40 flex flex-col items-start space-y-2">
				{bottomLinks.map(({ href, label, Icon }) => (
					<NavLink
						className="text-zinc-500 data-[current=true]:text-zinc-100"
						key={href}
						href={href}
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
