import { Button } from '@/components/ui/button'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger
} from '@/components/ui/hover-card'

export default function StudentsProduct() {
	return (
		<div>
			<h1>Alunos</h1>
			<h1>Gerencie seus alunos</h1>

			<HoverCard>
				<HoverCardTrigger asChild>
					<Button variant="link">@nextjs</Button>
				</HoverCardTrigger>
				<HoverCardContent
					align="center"
					className="overflow-hidden shadow-xl -mt-32 bg-zinc-900 border-zinc-800 rounded w-80"
				>
					{/* 	<div className="flex justify-between space-x-4">
						<Avatar>
							<AvatarImage src="https://github.com/vercel.png" />
							<AvatarFallback>VC</AvatarFallback>
						</Avatar>
						<div className="space-y-1">
							<h4 className="text-sm font-semibold">@nextjs</h4>
							<p className="text-sm">
								The React Framework – created and maintained by @vercel.
							</p>
							<div className="flex items-center pt-2">
								<CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
								<span className="text-xs text-muted-foreground">
									Joined December 2021
								</span>
							</div>
						</div>
					</div> */}
					<video
						autoPlay
						src="https://www.w3schools.com/html/mov_bbb.mp4"
						className="w-full "
					/>
					<div className="p-3">
						<Button className="rounded w-full bg-indigo-700">Acessar</Button>
					</div>
				</HoverCardContent>
			</HoverCard>
		</div>
	)
}
