import { ProfileButton } from './profile-button'
import { InfoHeader } from './info-header'

import { NotificationsBadge } from './notifications-badge'
import { Separator } from './ui/separator'

export function Header() {
	return (
		<div className="flex items-center justify-between">
			<InfoHeader title={'Fourza Inside'} />
			<div className="flex items-center gap-3">
				<NotificationsBadge />
				<Separator orientation="vertical" className="h-9 bg-muted-foreground/20" />
				<ProfileButton />
			</div>
		</div>
	)
}
