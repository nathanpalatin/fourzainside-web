import { Separator } from "./ui/separator"

interface HeaderProps {
	title: string
}
export function InfoHeader({ title }: HeaderProps) {

	return (
		<div className="flex items-center w-[600px] gap-2 ">
			<h1 className="text-2xl font-medium">{title}</h1>
			<Separator orientation="vertical" className="h-8 mx-2 bg-muted-foreground/30" />
		</div>
	)
}
