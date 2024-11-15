import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'

export default function CreateOrganization() {
	return (
		<Sheet open>
			<InterceptedSheetContent>
				<SheetHeader>
					<SheetTitle>Sobre a empresa</SheetTitle>
				</SheetHeader>

				<div className="py-4">
					<h1>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatibus molestiae blanditiis ea
						eaque consectetur, dolorem illo iure incidunt reiciendis, iusto illum expedita ipsam aliquid unde
						architecto quam aut doloribus.
					</h1>
				</div>
			</InterceptedSheetContent>
		</Sheet>
	)
}
