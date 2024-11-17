export type Role = keyof typeof ROLES
type Permission = (typeof ROLES)[Role][number]

const ROLES = {
	ADMIN: ['read', 'write', 'delete', 'admin'],
	MENTOR: ['read', 'write'],
	USER: ['read']
} as const

export function hasPermission(
	user: { id: string; role: Role },
	permission: Permission
) {
	return (ROLES[user.role] as readonly Permission[]).includes(permission)
}
