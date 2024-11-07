import { NavLink } from './nav-link'
import { Button } from './ui/button'

export async function Tabs() {
	const currentOrg = 'maiagiacomelli'
	return (
		<div className="border-b mt-10 border-zinc-800 py-4">
			<nav className="mx-auto px-6 flex items-center gap-2">
				<Button
					asChild
					variant="ghost"
					size="sm"
					className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
				>
					<NavLink href={`/dashboard/org/${currentOrg}/settings`}>Configurações</NavLink>
				</Button>

			</nav>
		</div>
	)
}
