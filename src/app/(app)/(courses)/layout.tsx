import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Vance - Members Area',
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

export default async function JourneyLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className="h-screen">
			<div className="flex-1">
				{children}
				<Toaster />
			</div>
		</div>
	)
}
