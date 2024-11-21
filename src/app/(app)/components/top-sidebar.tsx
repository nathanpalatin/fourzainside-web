import Image from 'next/image'

import logo from '@/assets/icon.png'

export function TopSidebar() {
	return (
		<div className="w-full flex justify-between items-center pt-10 px-10">
			<div className="flex-1 flex justify-center">
				<nav className="z-50">
					<ul className="flex gap-5 list-none">
						<li>
							<a href="#">Início</a>
						</li>
						<li>
							<a href="#">Conteúdo</a>
						</li>
						<li>
							<a href="#">Minhas coisas</a>
						</li>
						<li>
							<a href="#">Comunidade</a>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<Image
					alt="Logo"
					className="opacity-50"
					src={logo}
					width={100}
					height={80}
				/>
			</div>
		</div>
	)
}
