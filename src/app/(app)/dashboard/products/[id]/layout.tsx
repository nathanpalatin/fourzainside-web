import { Metadata } from 'next'

import { Toaster } from '@/components/ui/sonner'
import { SidebarProduct } from '../components/sidebar-product'

export const metadata: Metadata = {
	title: 'Vance - Dashboard'
}

export default function ProductLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className="h-screen flex flex-col md:flex-row">
			<div className="flex-1 flex gap-6">
				<SidebarProduct />
				<main className="flex-1">{children}</main>
			</div>
			<Toaster />
		</div>
	)
}
