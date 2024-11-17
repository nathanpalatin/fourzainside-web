'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function ButtonAction() {
	const router = useRouter()
	return (
		<Button className="bg-green-700 hover:bg-green-800 text-lg rounded font-bold mt-10">
			<Link
				target="_new"
				href="https://wa.me/5513997200757"
				className="text-sm hover:no-underline"
			>
				Quero mais essa energia e disposição
			</Link>
		</Button>
	)
}
