import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/auth/auth'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'
import { getProfile } from '@/http/get-profile'

export const metadata: Metadata = {
	title: 'Fourza Inside - Admin area'
}

export default async function AppLayout({
	children,
	sheet
}: Readonly<{
	children: React.ReactNode
	sheet: React.ReactNode
}>) {
	const { user } = await getProfile()


	if (!isAuthenticated()) {
		redirect('/auth/sign-in')
	}

	if (user.role !== 'MENTOR' && user.role === 'USER') {
		redirect('/')
	}


	return (
		<div className="flex h-screen">
			<div className="flex-1 ">

				<>
					{children}
					{sheet}
				</>
				<Toaster />
			</div>
		</div>
	)
}
