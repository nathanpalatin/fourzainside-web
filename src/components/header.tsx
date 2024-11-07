import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

import { ProfileButton } from './profile-button'
import { NotificationsBadge } from './notifications-badge'
import { InfoHeader } from './info-header'

export function Header() {


	return (
		<div className="mx-auto flex items-center justify-between">
			<div className="flex items-center gap-4">
				<InfoHeader title={'Reset Intestino'} />
			</div>
			<div className="flex items-center gap-3">
				<ThemeSwitcher />
				<NotificationsBadge />
				<Separator orientation="vertical" className="h-9 bg-muted-foreground/30" />
				<ProfileButton />
			</div>
		</div>
	)
}
