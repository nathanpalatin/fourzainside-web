import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'
import { Tabs } from '@/components/tabs'

export default function SettingsLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	if (!isAuthenticated()) {
		redirect('/auth/sign-in')
	}

	return (
		<>
			<Tabs />
			<div className="p-6">{children}</div>
		</>
	)
}
