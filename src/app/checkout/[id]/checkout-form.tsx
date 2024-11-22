'use client'

import { useFormSecondState } from '@/hooks/use-form-second-state'
import { useParams } from 'next/navigation'
import { paymentAction } from '../actions/api-payment'

export function CheckoutForm() {
	const idProduct = useParams<{ id: string }>()

	const { handleSubmit } = useFormSecondState(paymentAction)

	return <div>{idProduct.id}</div>
}
