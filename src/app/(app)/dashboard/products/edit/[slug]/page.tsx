import Link from 'next/link'
import { FormEditProduct } from '../form-edit-product'
import { Button } from '@/components/ui/button'
import { DropdownSettings } from '../../components/dropdown-settings'

export default function EditProduct() {
	return (
		<section>
			<div className="flex w-full justify-end items-center">
				<DropdownSettings />
			</div>
			<FormEditProduct />
		</section>
	)
}
