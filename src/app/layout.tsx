import './globals.css'

import { Cambay } from 'next/font/google'

import type { Metadata } from 'next'

import { Providers } from './providers'

export const metadata: Metadata = {
	title: 'Vance - Educação para a vida'
}

const inter = Cambay({
	weight: ['400', '700'],
	display: 'swap',
	subsets: ['latin']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-br">
			<body className={`${inter.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
