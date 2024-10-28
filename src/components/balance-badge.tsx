'use client'

import { BadgeDollarSignIcon } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getBalance } from '@/http/get-balance'
import { LoadingBalanceBadge } from './loading-balance-badge'

export function BalanceBadge() {
	const { data, isFetching } = useQuery({
		queryKey: ['balances'],
		queryFn: () => getBalance()
	})

	if (isFetching) {
		return <LoadingBalanceBadge />
	}

	return (
		<div className="space-y-2 dark:bg-zinc-900 bg-zinc-200 shadow rounded-xl px-10 py-4">
			<BadgeDollarSignIcon />
			<h1 className="text-3xl font-semibold">
				{(data ? data.balances.balance : 0).toLocaleString('pt-br', {
					style: 'currency',
					currency: data ? data.balances.coinType : 'BRL',
					currencyDisplay: 'symbol'
				})}
			</h1>
			<h1 className="text-xl text-zinc-500">Balance</h1>
		</div>
	)
}
