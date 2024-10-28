import { getMembership } from '@/http/get-membership'
import { getProfile } from '@/http/get-profile'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function isAuthenticated() {
	const cookieStore = await cookies()
	return cookieStore.get('token')?.value
}

export async function getCurrentOrg() {
	const cookieStore = await cookies()
	return cookieStore.get('org')?.value ?? null
}

export async function getCurrentMembership() {
	const org = getCurrentOrg()

	if (!org) {
		return null
	}

	const { user } = await getMembership()

	return user
}

export async function auth() {
	const cookieStore = await cookies()
	const token = cookieStore.get('token')?.value

	if (!token) {
		redirect('/auth/sign-in')
	}

	try {
		const { user } = await getProfile()

		return { user }
	} catch {}

	redirect('/api/auth/sign-out')
}
