import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/auth/auth'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'

import { Header } from './components/header'

export const metadata: Metadata = {
	title: 'Vance'
}

export default async function AppLayout({
	children
}: {
	children: React.ReactNode
}) {
	if (!isAuthenticated()) {
		redirect('/auth/sign-in')
	}

	return (
		<div className="h-screen">
			<div className="border-b border-zinc-900 px-6 py-3">
				<Header />
			</div>
			<div className="flex-1">
				{children}
				<Toaster />
			</div>
		</div>
	)
}
