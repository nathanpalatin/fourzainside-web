import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ProductCard } from './components/product-card'

import { getProducts } from '@/http/dashboard/products/get-products'

export default async function ProductsPage() {
	const { courses } = await getProducts()

	return (
		<section>
			<div className="flex w-full justify-between items-center">
				<h1 className="text-2xl font-semibold">Produtos cadastrados</h1>
				<Link href="/dashboard/products/new">
					<Button className="bg-green-700 pt-3 hover:bg-green-600 rounded-full">
						Adicionar
					</Button>
				</Link>
			</div>
			{courses.length === 0 ? (
				<div className="mt-6 ">
					<h1 className="text-zinc-400">
						Nenhum produto cadastrado, adicione o seu primeiro.
					</h1>
				</div>
			) : (
				<div className="mt-6 grid grid-cols-3 gap-4">
					{courses.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			)}
		</section>
	)
}
