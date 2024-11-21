import { ProfileButton } from './profile-button'

import { NotificationsBadge } from './notifications-badge'
import { SearchHeader } from './search-header'
import { Separator } from '@/components/ui/separator'

export function Header() {
	return (
		<div className="flex items-center justify-end">
			<div className="flex items-center gap-3">
				<SearchHeader />
				<NotificationsBadge />
				<Separator
					orientation="vertical"
					className="h-9 bg-muted-foreground/20"
				/>
				<ProfileButton />
			</div>
		</div>
	)
}
