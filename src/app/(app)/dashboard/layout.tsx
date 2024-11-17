import { redirect } from 'next/navigation'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'
import { Sidebar } from '../components/sidebar'
import { auth } from '@/auth/auth'

export const metadata: Metadata = {
	title: 'Fourza Inside - Admin area'
}

export default async function AppLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const { user } = await auth()

	if (user.role === 'USER') {
		redirect('/')
	}

	return (
		<div className="flex h-screen">
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
