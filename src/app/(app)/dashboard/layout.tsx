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
		<div className="h-screen flex flex-col">
			<div className="p-8 flex-1 flex flex-col">
				<HeaderDashboard />
				<div className="mt-10 flex flex-1">
					<Sidebar />
					<div className="flex-1">{children}</div>
				</div>
			</div>
			<Toaster />
		</div>
	)
}
