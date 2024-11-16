import { FormNewProduct } from './form-new-product'

export default function NewProduct() {
	return (
		<div className="mt-4 flex flex-col gap-3 items-start">
			<h1 className="text-xl font-semibold">Cadastrar novo produto</h1>
			<FormNewProduct />
		</div>
	)
}
