'use server'

import { env } from '@/env/env'
import { getCookie, setCookie } from 'cookies-next'
import ky from 'ky'
import { cookies } from 'next/headers'

let isRefreshing = false
let refreshSubscribers: Array<(token: string) => void> = []

interface RefreshTokenResponse {
	token: string
	refreshToken: string
}

function onRefreshed(token: string) {
	refreshSubscribers.forEach(callback => callback(token))
	refreshSubscribers = []
}

export const api = ky.create({
	prefixUrl: env.NEXT_PUBLIC_API_URL,
	hooks: {
		beforeRequest: [
			async request => {
				const isServer = typeof window === 'undefined'

				let token: string | undefined
				if (isServer) {
					const cookieStore = await cookies()
					token = cookieStore.get('token')?.value
				} else {
					token = getCookie('token') as string | undefined
				}

				if (token) {
					request.headers.set('Authorization', `${token}`)
				}
			}
		],
		afterResponse: [
			async (_request, _options, response) => {
				if (response.status === 403) {
					const originalRequest = _request.clone()

					if (!isRefreshing) {
						isRefreshing = true

						let refreshToken: string | undefined
						if (typeof window === 'undefined') {
							const cookieStore = await cookies()
							refreshToken = cookieStore.get('refreshToken')?.value
						} else {
							refreshToken = getCookie('refreshToken') as string | undefined
						}

						if (!refreshToken) {
							throw new Error('No refresh token available')
						}

						try {
							const refreshResponse = await ky
								.patch(`${env.NEXT_PUBLIC_API_URL}/users/token/refresh`, {
									json: { refreshToken }
								})
								.json<RefreshTokenResponse>()

							const newToken = refreshResponse.token
							const newRefreshToken = refreshResponse.refreshToken

							setCookie('token', newToken, {
								sameSite: true,
								httpOnly: true,
								secure: true
							})
							setCookie('refreshToken', newRefreshToken, {
								sameSite: true,
								httpOnly: true,
								secure: true
							})

							onRefreshed(newToken)

							originalRequest.headers.set('Authorization', `${newToken}`)
							return ky(originalRequest)
						} catch (error) {
							console.error('Failed to refresh token:', error)

							if (error.response) {
								const errorText = await error.response.text()
								console.error('Response from server:', errorText)
							}

							throw error
						} finally {
							isRefreshing = false
						}
					} else {
						return new Promise(resolve => {
							refreshSubscribers.push((newToken: string) => {
								originalRequest.headers.set('Authorization', `${newToken}`)
								resolve(ky(originalRequest))
							})
						})
					}
				}
			}
		]
	}
})
