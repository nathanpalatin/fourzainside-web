import Link from 'next/link'
import { FormNewProduct } from './form-new-product'
import { Button } from '@/components/ui/button'

export default function NewProduct() {
	return (
		<section>
			<div className="flex w-full justify-between items-center">
				<h1>Cadastrar novo produto</h1>
				{/* 	<Link href="/dashboard/products">
					<Button variant="outline" className="rounded-full items-start">
						Voltar
					</Button>
				</Link> */}
			</div>
			<FormNewProduct />
		</section>
	)
}
