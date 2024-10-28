import { Search } from 'lucide-react'
import { Input } from './ui/input'

export function SearchHeader() {
	return (
		<div className="flex mt-1">
			<div className="dark:bg-zinc-800 bg-zinc-200 rounded-full h-8 flex items-center">
				<Input className="border-0 text-xs" placeholder="pesquisar..." />
				<Search className="size-4 text-zinc-500 mr-3" />
			</div>
		</div>
	)
}
