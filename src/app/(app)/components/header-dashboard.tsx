import { ProfileButton } from './profile-button'
import Image from 'next/image'

import logo from '@/assets/icon.png'
import { Separator } from '@/components/ui/separator'
import { ProgressLevel } from './progress-level'
export function HeaderDashboard() {
	return (
		<div className="flex items-center justify-between">
			<div className="flex-1 flex items-center">
				<div className="flex items-center gap-3">
					<Image alt="" width={120} height={40} src={logo} />
					<Separator
						orientation="vertical"
						className="bg-muted-foreground h-8"
					/>
					<h1 className="text-sm pt-1">all in one</h1>
				</div>
				<ProgressLevel />
			</div>
			<ProfileButton />
		</div>
	)
}
