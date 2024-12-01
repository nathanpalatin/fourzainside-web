import { FormNewProduct } from './form-new-product'

export default function NewProduct() {
	return (
		<section>
			<div className="flex w-full justify-between items-center">
				<h1>Cadastrar novo produto</h1>
			</div>
			<FormNewProduct />
		</section>
	)
}
