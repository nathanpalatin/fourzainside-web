import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { auth } from '@/auth/auth'

import { Toaster } from '@/components/ui/sonner'
import { Sidebar } from '../components/sidebar'
import { HeaderDashboard } from '../components/header-dashboard'

export const metadata: Metadata = {
	title: 'Vance - Dashboard Admin'
}

export default async function AppLayout({
	children
}: {
	children: React.ReactNode
}) {
	const { user } = await auth()

	if (user.role === 'USER') {
		redirect('/')
	}

	return (
		<div className="h-screen">
			<div className="p-8">
				<HeaderDashboard />
			</div>
			<div className="flex-1">
				<div className="flex gap-3">
					<Sidebar />
					{children}
				</div>
				<Toaster />
			</div>
		</div>
	)
}
