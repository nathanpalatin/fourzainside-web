'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { ComponentProps } from 'react'

interface NavLinkProps extends ComponentProps<typeof Link> {
	matchQueryParams?: boolean
}

export function NavLink({
	href,
	className,
	matchQueryParams = false,
	...props
}: NavLinkProps) {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const isCurrent = matchQueryParams
		? `${pathname}?${searchParams.toString()}` === href
		: pathname === href

	return (
		<Link
			href={href}
			data-current={isCurrent}
			className={`${className} ${
				isCurrent ? 'text-zinc-100 font-bold' : 'text-zinc-500'
			}`}
			{...props}
		/>
	)
}
