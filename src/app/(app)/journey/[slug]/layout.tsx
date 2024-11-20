import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Vance'
}

export default async function JourneyLayout({
	children,
	sheet
}: Readonly<{
	children: React.ReactNode
	sheet: React.ReactNode
}>) {
	return (
		<div className="flex h-screen">
			<div className="flex-1">
				<>{children}</>
				<Toaster />
			</div>
		</div>
	)
}
