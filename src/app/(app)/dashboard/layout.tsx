import { redirect } from 'next/navigation'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'
import { Sidebar } from '../components/sidebar'
import { auth } from '@/auth/auth'
import { Header } from '../components/header'

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
			<div className="border-b border-zinc-900 px-6 py-3">
				<Header />
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
