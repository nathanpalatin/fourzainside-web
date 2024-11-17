'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'

export function Providers({ children }: { children: ReactNode }) {
	const [mounted, setMounted] = useState(false)

	const queryClient = new QueryClient()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	)
}
