import { Metadata } from 'next'

import { Toaster } from '@/components/ui/sonner'
import { Sidebar } from '../../../components/sidebar'
import { TopbarProduct } from '../components/top-bar'

export const metadata: Metadata = {
	title: 'Vance - Dashboard'
}

export default function ProductLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className="h-screen flex">
			<div className=" flex flex-col flex-1">
				<TopbarProduct />
				<div className="flex-1">{children}</div>
			</div>
			<Toaster />
		</div>
	)
}
