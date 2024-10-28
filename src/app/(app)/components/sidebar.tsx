'use client'

import { useState } from 'react'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export function SidebarToggle() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<>
			<div
				className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-zinc-200 overflow-hidden`}
			>
				<div className="flex flex-col mt-10 h-screen p-4 text-white">
					<Image
						alt="logo sidebar"
						width={140}
						className="self-center"
						height={70}
						src={require('@/assets/logo-sidebar.png')}
					/>
					<nav className="mt-8 px-2">
						<ul>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="/" className="text-muted-foreground text-sm">
									Inicial
								</a>
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="/recommendations" className="text-muted-foreground text-sm">
									Análises e recomendações
								</a>
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="#" className="text-muted-foreground text-sm">
									Minhas finanças
								</a>
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="#" className="text-muted-foreground text-sm">
									Carteiras
								</a>
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="#" className="text-muted-foreground text-sm">
									Planejamento
								</a>
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="#" className="text-muted-foreground text-sm">
									Investimento
								</a>
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="#" className="text-muted-foreground text-sm">
									Crédito
								</a>
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="#" className="text-muted-foreground text-sm">
									Seguros
								</a>
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="#" className="text-muted-foreground text-sm">
									Cartão
								</a>
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="#" className="text-muted-foreground text-sm">
									Store
								</a>
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-zinc-500" />
								<a href="#" className="text-muted-foreground text-sm">
									Ferramentas
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<button
				onClick={toggleSidebar}
				className={`absolute top-6 ${
					isSidebarOpen ? 'left-60 rotate-180' : '-left-3'
				} z-50 p-1 bg-muted-foreground transition-all duration-300 text-white rounded-full`}
			>
				<ChevronRight />
			</button>
		</>
	)
}
