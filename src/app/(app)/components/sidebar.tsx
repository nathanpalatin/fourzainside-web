import { CoinsIcon, LayoutDashboardIcon, NetworkIcon, NotebookTabs } from 'lucide-react'

export function Sidebar() {
	return (
		<div className="h-screen mt-2 ml-4 w-[240px] overflow-y-hidden ">
			<div className="flex flex-col items-center space-y-3 p-2">
				<a
					href="/dashboard"
					className="bg-zinc-900 hover:border-indigo-700  transition-all flex justify-start items-center rounded border border-zinc-700 w-full h-16"
				>
					<div className="flex gap-2 m-2 ">
						<LayoutDashboardIcon className="size-10" />
						<div className="flex flex-col gap-px">
							<h1 className="uppercase text-sm font-semibold">dashboard</h1>
							<p className="uppercase text-zinc-600 font-thin text-xs">visão geral</p>
						</div>
					</div>
				</a>
				<a
					href="/dashboard/sales"
					className="bg-zinc-900 hover:border-indigo-700  transition-all hover:bg-zinc-900/90 flex justify-start items-center rounded border border-zinc-700 w-full h-16"
				>
					<div className="flex gap-2 m-2 ">
						<CoinsIcon className="size-10" />
						<div className="flex flex-col gap-px">
							<h1 className="uppercase text-sm font-semibold">vendas</h1>
							<p className="uppercase text-zinc-600 font-thin text-xs">faturamento</p>
						</div>
					</div>
				</a>

				<a
					href="/dashboard/projects"
					className="bg-zinc-900 hover:border-indigo-700  transition-all hover:bg-zinc-900/90 flex justify-start items-center rounded border border-zinc-700 w-full h-16"
				>
					<div className="flex gap-2 m-2 ">
						<NotebookTabs className="size-10" />
						<div className="flex flex-col gap-px">
							<h1 className="uppercase text-sm font-semibold">produtos</h1>
							<p className="uppercase text-zinc-600 font-thin text-xs">seus cursos</p>
						</div>
					</div>
				</a>

				<div className="bg-zinc-900 hover:bg-zinc-900/90 hover:border-indigo-700  transition-all flex justify-start items-center rounded border border-zinc-700 w-full h-16">
					<div className="flex gap-2 m-2 ">
						<NetworkIcon className="size-10" />
						<div className="flex flex-col gap-px">
							<h1 className="uppercase text-sm font-semibold">indique e ganhe</h1>
							<p className="uppercase text-zinc-600 font-thin text-xs">AFILIE-SE</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
