'use client'

import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { BellIcon, CheckCheckIcon, Settings } from 'lucide-react'
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '../../../components/ui/dropdown-menu'
import { Button } from '../../../components/ui/button'
import { Avatar } from '../../../components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { useQuery } from '@tanstack/react-query'
import { getNotifications } from '@/http/get-notifications'
import { LoadingNotificationsBadge } from './loading-notifications-badge'
import { useRouter } from 'next/navigation'
import { Separator } from '../../../components/ui/separator'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '../../../components/ui/tabs'
import { Card, CardContent } from '../../../components/ui/card'

export function NotificationsBadge() {
	const router = useRouter()

	const { data, isLoading } = useQuery({
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 5,
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
					<div className="flex">
						<BellIcon size={23} />
						{data.notifications.length > 0 && (
							<span className="relative flex h-3 w-3">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
							</span>
						)}
					</div>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align="center"
				className="border-zinc-800 rounded backdrop-blur-lg bg-zinc-900 w-[360px]"
			>
				<DropdownMenuLabel>
					<div className="flex justify-between items-center mb-3">
						<h1 className="flex-1">Notificações</h1>
						<CheckCheckIcon className="text-zinc-400" size={13} />
						<p className="pl-1 text-xs font-light flex text-zinc-400">
							Marcar todas como lidas
						</p>
						<Separator
							className="h-4 mx-2 bg-muted-foreground/20"
							orientation="vertical"
						/>
						<Settings className="text-zinc-400" size={16} />
					</div>
				</DropdownMenuLabel>
				<Tabs defaultValue="unread" className="w-full">
					<TabsList className="w-full grid grid-cols-2">
						<TabsTrigger value="unread">Não lidas</TabsTrigger>
						<TabsTrigger
							value="read"
							disabled={
								data.notifications.filter(item => item.status === 'read')
									.length === 0
							}
						>
							Lidas
						</TabsTrigger>
					</TabsList>
					<TabsContent value="unread">
						<Card className="mt-7">
							<CardContent className="space-y-2">
								{data.notifications.length === 0 && (
									<p className="text-zinc-700 text-sm p-2">
										Nenhuma notificação no momento.
									</p>
								)}
								{data.notifications.map(notification => (
									<DropdownMenuItem
										key={notification.id}
										className="gap-2 cursor-pointer"
										onClick={() => router.push('/notifications')}
									>
										<div className="flex w-full items-start gap-2">
											<Avatar className="size-8">
												<AvatarFallback className=" w-full bg-muted-foreground pt-2 uppercase text-center text-xs">
													{notification.sendUser.name.substring(0, 2)}
												</AvatarFallback>
											</Avatar>
											<p className="text-zinc-400 text-xs">
												<strong className="text-zinc-200">
													{notification.sendUser.name}
												</strong>{' '}
												enviou uma dúvida relacionada a aula: Modulação
												Intestinal do
												<strong> Reset Intestino</strong>.
											</p>
										</div>
									</DropdownMenuItem>
								))}
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="read">
						<Card>
							<CardContent className="space-y-2">
								{data.notifications.length === 0 && (
									<p className="text-zinc-700 text-xs p-2">
										Nenhuma notificação no momento.
									</p>
								)}
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
