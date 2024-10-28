'use client'

import { BadgeDollarSignIcon, ChevronDownCircle, DollarSignIcon, WalletMinimal } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getBalance } from '@/http/get-balance'
import { LoadingBalanceBadge } from './loading-balance-badge'

export function IncomingBadge() {
	const { data, isLoading } = useQuery({
		queryKey: ['balances'],
		queryFn: () => getBalance()
	})

	if (isLoading) {
		return <LoadingBalanceBadge />
	}

	return (
		<div className="space-y-2 dark:bg-zinc-900 bg-zinc-200 shadow rounded-xl px-10 py-4">
			<WalletMinimal />

			<h1 className="text-3xl font-semibold">
				{(data ? data.balances.balance / 14 : 0).toLocaleString('pt-br', {
					style: 'currency',
					currency: data.balances.coinType,
					currencyDisplay: 'symbol'
				})}
			</h1>
			<h1 className="text-xl text-zinc-500">Incoming</h1>
		</div>
	)
}
