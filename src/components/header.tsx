import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

import { SearchHeader } from './search-header'
import { ProfileButton } from './profile-button'
import { NotificationsBadge } from './notifications-badge'
import { InfoFinance } from './info-header'

export function Header() {
	return (
		<div className="mx-auto flex items-center justify-between">
			<div className="flex items-center gap-4">
				<InfoFinance />
				<SearchHeader />
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
