'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'


export function Providers({ children }: { children: ReactNode }) {

	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	)
}
