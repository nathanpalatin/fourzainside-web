'use client'

import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { BellIcon } from 'lucide-react'
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { useQuery } from '@tanstack/react-query'
import { getNotifications } from '@/http/get-notifications'
import { LoadingNotificationsBadge } from './loading-notifications-badge'

export function NotificationsBadge() {
	const { data, isLoading } = useQuery({
		queryKey: ['notifications'],
		queryFn: () => getNotifications()
	})

	if (isLoading) {
		return <LoadingNotificationsBadge />
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<div className='flex'>
						<BellIcon size={23} />
						{data.notifications.length > 0 && <div className="w-2 h-2 bg-indigo-600 top-0 right-0 rounded-full" />}
					</div>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="center" className="border-zinc-800 backdrop-blur-lg bg-zinc-800/70 w-[280px]">
				<DropdownMenuLabel>Notificações</DropdownMenuLabel>
				{data.notifications.length === 0 && (
					<p className="text-muted-foreground text-xs p-2">Nenhuma notificação no momento.</p>
				)}
				{data.notifications.map(notification => (
					<DropdownMenuItem key={notification.id} className="gap-2" onClick={() => { }}>
						<div className="flex w-full items-start border-b pb-2 border-muted-foreground gap-2">
							<Avatar className="size-8">
								<AvatarImage src={notification.senderUserId.avatar} />
								<AvatarFallback className="bg-muted-foreground text-xs">
									{notification.senderUserId.name.substring(0, 2)}
								</AvatarFallback>
							</Avatar>
							<p className="text-muted-foreground">
								<strong className="text-zinc-300">{notification.senderUserId.name}</strong> enviou uma mensagem para
								você.
							</p>
						</div>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
