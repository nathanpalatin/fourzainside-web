import { useQuery } from '@tanstack/react-query'
import { DrawerNewModule } from '../../../components/drawer-new-module'
import { getModules } from '@/http/dashboard/products/modules/get-modules'
import { Skeleton } from '@/components/ui/skeleton'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { UsersRoundIcon } from 'lucide-react'

interface ModuleProps {
	idProduct: string
}

export default function Modules({ idProduct }: ModuleProps) {
	const { data, isLoading } = useQuery({
		queryKey: ['modules', idProduct],
		queryFn: async () => await getModules(idProduct)
	})
	return (
		<div className="w-full">
			<div className="flex items-center justify-between mb-3 ">
				<h1 className="text-xl font-semibold text-white ">
					Módulos cadastrados
				</h1>
				<DrawerNewModule />
			</div>

			<div className="bg-zinc-900 border border-zinc-800 rounded  w-full">
				<div className="px-4">
					{isLoading && (
						<div className="w-full px-4 py-4 h-full flex flex-col gap-3 items-center justify-center">
							<Skeleton className="bg-zinc-700 self-start h-4 w-20 rounded" />
							<Skeleton className="bg-zinc-700 h-16 w-full rounded" />
							<Skeleton className="bg-zinc-700 self-start h-4 w-20 rounded" />
							<Skeleton className="bg-zinc-700 h-16 w-full rounded" />
							<Skeleton className="bg-zinc-700 self-start h-4 w-20 rounded" />
							<Skeleton className="bg-zinc-700 h-16 w-full rounded" />
						</div>
					)}
					{data?.map((module, index) => {
						return (
							<div
								key={module.id}
								className="py-4 px-4 border-b border-zinc-800"
							>
								<h1 className="text-zinc-400">Módulo {index + 1}</h1>
								<Accordion type="single" defaultValue="members" collapsible>
									<AccordionItem
										value="members"
										className="border border-zinc-700 bg-zinc-900 rounded px-3"
									>
										<AccordionTrigger className="flex items-center gap-3">
											<div className="flex items-center gap-2">
												<UsersRoundIcon className="size-4" />
												<h1 className="text-lg pt-1 font-semibold">
													{module.title}
												</h1>
											</div>
										</AccordionTrigger>
										<AccordionContent className="pl-6"></AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
