import './globals.css'

import { Cambay } from 'next/font/google'

import type { Metadata } from 'next'

import { Providers } from './providers'

export const metadata: Metadata = {
	title: 'Vance'
}

const cambay = Cambay({
	subsets: ['latin'],
	weight: ['400', '700']
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={`${cambay.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
