import Link from 'next/link'

interface HeaderProps {
	title: string
}
export async function InfoHeader({ title }: HeaderProps) {
	return (
		<Link href={`/`}>
			<div className="flex items-center w-[600px] ">
				<h1 className="text-2xl font-medium">{title}</h1>
			</div>
		</Link>
	)
}
