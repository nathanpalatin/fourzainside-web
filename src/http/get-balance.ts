'use server'
import { api } from './api-client'

interface GetBalanceResponse {
	balances: {
		balance: number
		coinType: string
		country: string
	}
}

export async function getBalance() {
	const response = await api.get('wallets').json<GetBalanceResponse>()
	return response
}
