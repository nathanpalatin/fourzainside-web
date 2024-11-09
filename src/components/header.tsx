

import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

import { ProfileButton } from './profile-button'
import { NotificationsBadge } from './notifications-badge'
import { InfoHeader } from './info-header'

export function Header() {
	return (
		<div className="flex items-center justify-between">
			<InfoHeader title={'Fourza Inside'} />
			<div className="flex items-center gap-3">
				<ThemeSwitcher />
				<NotificationsBadge />
				<Separator orientation="vertical" className="h-9 bg-muted-foreground/30" />
				<ProfileButton />
			</div>
		</div>
	)
}
