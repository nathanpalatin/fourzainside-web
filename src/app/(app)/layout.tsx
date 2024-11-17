import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/auth/auth'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './components/app-sidebar'

export const metadata: Metadata = {
	title: 'Fourza Inside'
}

export default async function AppLayout({
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
			<div className="flex-1">
				<div className="bg-zinc-900 border-b border-zinc-900 px-6 py-3">
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
