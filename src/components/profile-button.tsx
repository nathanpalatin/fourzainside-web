import { ChevronDown, LogOut, Settings } from 'lucide-react'

import { auth } from '@/auth/auth'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

function getInitials(name: string): string {
	const initials = name
		.split(' ')
		.map(word => word.charAt(0).toUpperCase())
		.slice(0, 2)
		.join('')

	return initials
}

export async function ProfileButton() {
	const { user } = await auth()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex group items-center gap-3 outline-none">
				<div className="flex flex-col items-end">
					<span className="text-xs leading-4 text-muted-foreground">Boa noite,</span>
					<span className="text-xs font-medium">{user.name}</span>
				</div>
				<Avatar className="size-8">
					{user.avatar && <AvatarImage src={user.avatar} />}
					{user.name && (
						<AvatarFallback className="border border-zinc-500">{getInitials(user.name)}</AvatarFallback>
					)}
				</Avatar>
				<ChevronDown
					className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180"
					aria-hidden="true"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="mt-2 border border-zinc-700">
				<DropdownMenuItem asChild>
					<a href="/dashboard/org/maiagiacomelli/settings">
						<Settings className="mr-2 size-4" />
						Minha conta
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<a href="/api/auth/sign-out">
						<LogOut className="mr-2 size-4" />
						Sair
					</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
