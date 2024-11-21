import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

export default async function AuthLayout({
	children
}: {
	children: React.ReactNode
}) {
	if (await isAuthenticated()) {
		redirect('/')
	}

	return (
		<div
			className="flex min-h-screen flex-col items-center justify-center "
			suppressHydrationWarning
		>
			{children}
		</div>
	)
}
