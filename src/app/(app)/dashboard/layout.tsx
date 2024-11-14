import { redirect } from 'next/navigation'
import { isAdmin } from '@/auth/auth'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'
import { Sidebar } from '../components/sidebar'

export const metadata: Metadata = {
	title: 'Fourza Inside - Admin area'
}

export default async function AppLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	if (!isAdmin()) {
		redirect('/')
	}

	return (
		<div className="flex h-screen  ">
			<div className="flex-1">
				<>
					<div className="flex gap-3">
						<Sidebar />
						{children}
					</div>
				</>
				<Toaster />
			</div>
		</div>
	)
}
