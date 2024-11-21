'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function ButtonAction() {
	const router = useRouter()
	return (
		<Button className="bg-zinc-200  hover:bg-zinc-50 text-lg rounded-full text-black px-16 pt-6 pb-5 font-bold mt-10">
			<Link
				target="_new"
				href="https://wa.me/5513997200757"
				className="text-sm hover:no-underline"
			>
				Acessar conteúdo
			</Link>
		</Button>
	)
}
