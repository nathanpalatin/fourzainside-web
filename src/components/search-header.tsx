'use client'

import { Search } from 'lucide-react'
import { Input } from './ui/input'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export function SearchHeader() {
	const router = useRouter()
	function handleSearch(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData)

		const query = data.q

		if (!query) {
			return null
		}

		router.push(`/search?q=${query}`)
	}
	return (
		<form onSubmit={handleSearch}>
			<div className="flex items-center gap-1 group">
				<Input
					name="q"
					className="border-0 text-xs  rounded-full h-7 items-center transition-all duration-700 ease-in-out w-0 bg-transparent group-hover:bg-zinc-700 group-hover:w-40 group-hover:flex"
					placeholder="Pesquisar..."
				/>
				<div className="cursor-pointer">
					<button type="submit">
						<Search className="size-6 text-zinc-200 font-medium mt-2 mr-3" />
					</button>
				</div>
			</div>
		</form>
	)
}
