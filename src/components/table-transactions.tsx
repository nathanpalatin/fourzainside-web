'use client'

import { useState, useEffect } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

const invoices = [
	{
		invoice: 'INV001',
		paymentStatus: 'Paid',
		totalAmount: '$250.00',
		paymentMethod: 'Credit Card'
	},
	{
		invoice: 'INV002',
		paymentStatus: 'Pending',
		totalAmount: '$150.00',
		paymentMethod: 'PayPal'
	},
	{
		invoice: 'INV003',
		paymentStatus: 'Unpaid',
		totalAmount: '$350.00',
		paymentMethod: 'Bank Transfer'
	},
	{
		invoice: 'INV004',
		paymentStatus: 'Paid',
		totalAmount: '$450.00',
		paymentMethod: 'Credit Card'
	},
	{
		invoice: 'INV005',
		paymentStatus: 'Paid',
		totalAmount: '$550.00',
		paymentMethod: 'PayPal'
	}
]

function getStatusIcon(paymentStatus: string) {
	switch (paymentStatus) {
		case 'Paid':
			return <CheckCircle size={14} color="#087d41" />
		case 'Pending':
			return <AlertCircle size={14} color="#d77e00" />
		case 'Unpaid':
			return <XCircle size={14} color="#d90000" />
		default:
			return null
	}
}

export function TableTransactions() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1200)

		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return (
			<div className="space-y-4">
				<Skeleton className="h-8 w-full bg-zinc-600 rounded" />
				<Skeleton className="h-8 w-full bg-zinc-600 rounded" />
				<Skeleton className="h-8 w-full bg-zinc-600 rounded" />
				<Skeleton className="h-8 w-full bg-zinc-600 rounded" />
				<Skeleton className="h-8 w-full bg-zinc-600 rounded" />
				<Skeleton className="h-8 w-full bg-zinc-600 rounded" />
			</div>
		)
	}

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">#ID</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Método</TableHead>
					<TableHead className="text-right">Valor</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map(invoice => (
					<TableRow key={invoice.invoice}>
						<TableCell className="font-medium">{invoice.invoice}</TableCell>
						<TableCell className="flex items-center gap-2">
							{getStatusIcon(invoice.paymentStatus)} {invoice.paymentStatus}
						</TableCell>
						<TableCell>{invoice.paymentMethod}</TableCell>
						<TableCell className="text-right">{invoice.totalAmount}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	)
}
