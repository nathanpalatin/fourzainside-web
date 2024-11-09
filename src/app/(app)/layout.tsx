import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/auth/auth'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Fourza Inside - Member area %s'
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
		<div className="flex h-screen overflow-y-hidden">
			<div className="flex-1">
				<div className="px-6 pt-3">
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
