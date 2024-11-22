import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/auth/auth'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'

import { Header } from '../components/header'

export const metadata: Metadata = {
	title: 'Vance',
	description:
		'Vance é uma plataforma de educação para a vida, com foco em mentoria e aprendizagem.',
	openGraph: {
		images: {
			url: '/babi.jpeg',
			width: 600,
			height: 315,
			alt: 'Vance logo'
		}
	}
}

export default async function ClassRoomLayout({
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
