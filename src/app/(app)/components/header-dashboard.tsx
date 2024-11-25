import Link from 'next/link'
import Image from 'next/image'

import logo from '@/assets/icon.png'

import { ProgressLevel } from './progress-level'
import { ProfileButton } from './profile-button'

import { Separator } from '@/components/ui/separator'
import { NotificationsBadge } from './notifications-badge'

export function HeaderDashboard() {
	return (
		<div className="flex gap-3 items-center justify-between">
			<div className="flex-1 flex items-center">
				<div className="flex items-center gap-3">
					<Link href={'/dashboard'}>
						<Image alt="" width={120} height={40} src={logo} />
					</Link>
					<Separator
						orientation="vertical"
						className="bg-muted-foreground h-8"
					/>
					<h1 className="text-sm pt-1">all in one</h1>
				</div>
				<ProgressLevel />
			</div>
			<NotificationsBadge />
			<ProfileButton />
		</div>
	)
}
