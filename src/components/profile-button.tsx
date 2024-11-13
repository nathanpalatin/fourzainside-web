import { ChevronDown, LogOut, Settings } from 'lucide-react'

import { auth } from '@/auth/auth'

import { getGreeting, getInitials } from '@/lib/functions'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

export async function ProfileButton() {
	const { user } = await auth()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex group items-center gap-3 outline-none">
				<div className="flex flex-col items-end">
					<span className="text-xs leading-4 text-muted-foreground">{getGreeting()},</span>
					<span className="text-xs font-medium">{user.name}</span>
				</div>
				<Avatar className="size-8">
					{user.avatar && <AvatarImage src={user.avatar} />}
					<AvatarFallback className="border border-zinc-500">{getInitials(user.name)}</AvatarFallback>
				</Avatar>
				<ChevronDown
					className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180"
					aria-hidden="true"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="mt-2 border bg-zinc-900 border-zinc-800">
				<DropdownMenuItem asChild>
					<a href="/dashboard/account" className='cursor-pointer'>
						<Settings className="mr-2 size-4" />
						Minha conta
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<a href="/api/auth/sign-out" className='cursor-pointer'>
						<LogOut className="mr-2 size-4" />
						Sair
					</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
