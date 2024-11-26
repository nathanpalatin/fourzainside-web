import { Cambay } from 'next/font/google'

import type { Metadata } from 'next'
import { isAuthenticated } from '@/auth/auth'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
	title: 'Vance Pay - Checkout'
}

const cambay = Cambay({
	weight: ['400', '700'],
	display: 'swap',
	subsets: ['latin']
})

export default function CheckoutLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={`${cambay.className} antialiased`}>{children}</body>
		</html>
	)
}
