'use server'

import { api } from './api-client'

interface NotificationsType {
	notifications: {
		id: string
		sendUserId: string
		notificationType: string
		createdAt: string
		status: string
		senderUserId: SenderUserId
	}[]
}
interface SenderUserId {
	id: string
	username: string
	name: string
	avatar: string
}

export const getNotifications = async () => {
	const response = await api.get('notifications').json<NotificationsType>()
	return response
}
