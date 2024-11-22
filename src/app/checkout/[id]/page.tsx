import { CheckoutForm } from './checkout-form'

export default function Checkout() {
	return (
		<div className="h-screen w-screen flex justify-center items-center bg-zinc-100">
			<div className="flex items-center">
				<h1 className="text-2xl text-black font-semibold">Checkout</h1>

				<div className="border border-zinc-400 rounded-xl w-[500px] h-[800px]">
					<div className="p-4 mx-auto text-center">
						<CheckoutForm />
						<h1 className="text-zinc-400 text-sm">Pague mais fácil com:</h1>
					</div>
				</div>
			</div>
		</div>
	)
}
