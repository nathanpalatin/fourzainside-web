'use client'

import { DropdownMenu, Label } from '@radix-ui/react-dropdown-menu'
import { BellIcon, CheckCheckIcon, Settings } from 'lucide-react'
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar } from './ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { useQuery } from '@tanstack/react-query'
import { getNotifications } from '@/http/get-notifications'
import { LoadingNotificationsBadge } from './loading-notifications-badge'
import { useRouter } from 'next/navigation'
import { Separator } from './ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter
} from './ui/card'
import { Input } from './ui/input'

export function NotificationsBadge() {
	const router = useRouter()

	const { data, isLoading } = useQuery({
		refetchIntervalInBackground: true,
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
							<div className="w-2 h-2 animate-bounce bg-indigo-600 top-0 right-0 rounded-full" />
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
