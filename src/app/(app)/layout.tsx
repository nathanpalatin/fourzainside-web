import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/auth/auth'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'
import { SidebarToggle } from './components/sidebar'

export const metadata: Metadata = {
	title: 'Fourza Insider - Members area'
}

export default function AppLayout({
	children,
	sheet
}: Readonly<{
	children: React.ReactNode
	sheet: React.ReactNode
}>) {
	if (!isAuthenticated()) {
		redirect('/auth/sign-in')
	}

	return (
		<div className="flex h-screen">
			<div className="flex-1 overflow-y-hidden">
				<div className="px-6 pt-6">
					<Header />
				</div>
				<>
					{children}
					{sheet}
				</>
				<Toaster />
			</div>
		</div>
	)
}
