export function getGreeting() {
	const now = new Date()
	const hours = now.getHours()

	if (hours >= 5 && hours < 12) {
		return 'Bom dia'
	} else if (hours >= 12 && hours < 18) {
		return 'Boa tarde'
	} else {
		return 'Boa noite'
	}
}

export function getInitials(name: string): string {
	const initials = name
		.split(' ')
		.map(word => word.charAt(0).toUpperCase())
		.slice(0, 2)
		.join('')

	return initials
}
