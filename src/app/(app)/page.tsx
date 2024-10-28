import { StockCarousel } from '@/components/slider-stock'
import { Button } from '@/components/ui/button'

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { getStocks } from '@/http/get-stocks'

import { Trash } from 'lucide-react'

export default async function Home() {
	const { futures_chain } = await getStocks()

	return (
		<div className="space-y-4 py-4 px-10">
			<div className="flex items-start justify-start gap-4 w-full">
				<div className="w-full h-12 my-2 rounded-xl border dark:border-zinc-800"></div>
			</div>
			<div className="flex items-start justify-between gap-5 w-full">
				<div className="w-8/12 flex flex-col gap-4">
					<div className="flex items-center justify-between w-full gap-2">
						<div className="dark:border rounded-xl bg-cardprimary dark:bg-zinc-900 border-zinc-800 w-1/2">
							<div className="p-6">
								<h1 className="text-white text-lg mb-10">Total aplicado em TDP:</h1>
								<h1 className="text-white text-5xl flex gap-2 font-semibold">
									<span className="text-xl">R$</span>514.000,00
								</h1>
							</div>
						</div>
						<div className="dark:border rounded-xl bg-zinc-200 dark:bg-zinc-900 border-zinc-800 w-1/2">
							<div className="p-6">
								<h1 className="text-zinc-800 dark:text-muted-foreground text-lg mb-10">Investimentos</h1>
								<h1 className="text-cardprimary dark:text-zinc-100 text-5xl flex gap-2 font-semibold">
									<span className="text-xl">R$</span>178.000,00
								</h1>
							</div>
						</div>
					</div>
					<div className="dark:border rounded-xl bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 h-52">
						<div className="p-6">
							<h1 className="text-zinc-800 dark:text-muted-foreground text-lg mb-10">Evolução patrimonial:</h1>
						</div>
					</div>
					<div className="dark:border rounded-xl bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 h-52">
						<div className="p-6">
							<h1 className="text-zinc-800 dark:text-muted-foreground text-lg mb-10">Soluções para você:</h1>
						</div>
					</div>
					<div className="dark:border rounded-xl bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 h-52">
						<div className="p-6">
							<h1 className="text-zinc-800 dark:text-muted-foreground text-lg mb-10">Sua apólice de vida:</h1>
						</div>
					</div>
					<div className="dark:border rounded-xl bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 h-52">
						<div className="p-6">
							<h1 className="text-zinc-800 dark:text-muted-foreground text-lg mb-10">Crédito planejado:</h1>
						</div>
					</div>
				</div>
				<div className="w-4/12 gap-5 flex flex-col">
					<div className="dark:border rounded-xl bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 h-96">
						<div className="p-6">
							<h1 className="text-zinc-800 dark:text-muted-foreground text-lg mb-10">Esteja atualizado:</h1>
						</div>
					</div>
					<div className="dark:border rounded-xl bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 h-52">
						<div className="p-6">
							<h1 className="text-zinc-800 dark:text-muted-foreground text-lg mb-10">Ofertas:</h1>
						</div>
					</div>
					<div className="dark:border rounded-xl bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 h-96">
						<div className="p-6">
							<h1 className="text-zinc-800 dark:text-muted-foreground text-lg mb-10">Promoções e cashback:</h1>
						</div>
					</div>
				</div>
			</div>
			<Drawer>
				<DrawerTrigger asChild>
					<Button className="bg-zinc-800 flex gap-2 rounded">
						<Trash size={16} /> Opções
					</Button>
				</DrawerTrigger>
				<DrawerContent className="h-[300px] backdrop-blur-sm">
					<div className="mx-auto h-2 w-[100px] rounded-full bg-zinc-500" />
					<DrawerHeader>
						<DrawerTitle className="text-center text-3xl">Você tem certeza disso?</DrawerTitle>
						<DrawerDescription className="text-center">Essa ação não poderá ser desfeita.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose className="text-muted-foreground">fechar</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
