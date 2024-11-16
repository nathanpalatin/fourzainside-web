import { redirect } from 'next/navigation'

interface SearchProps {
	searchParams: {
		q: string
	}
}

export async function generateMetadata() {
	return {
		title: 'Procurar produto'
	}
}

export default async function Search({ searchParams }: SearchProps) {
	const { q: query } = searchParams

	if (!query) {
		redirect('/')
	}

	return (
		<div className="px-6 mt-10 flex flex-col gap-4">
			<p className="text-lg">
				Resultados para: <span className="font-semibold">{query}</span>
			</p>

			<div className="grid grid-cols-3 gap-4">
				<h1 className="text-sm text-zinc-400">ops, nada encontrado!</h1>
			</div>

			<div className="mt-10">
				<h1 className="text-sm text-zinc-100">
					Mas aqui vai algumas sugestões:
				</h1>
			</div>
		</div>
	)
}
