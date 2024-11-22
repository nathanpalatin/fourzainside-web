'use client'

export function MenuSidebar() {
	return (
		<div className="group fixed top-0 left-0 h-screen w-[340px]">
			<div className="h-full bg-gradient-to-r from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
				<div className="m-10">
					<div className="bg-zinc-100 rounded-full size-10"></div>
				</div>
			</div>
		</div>
	)
}
