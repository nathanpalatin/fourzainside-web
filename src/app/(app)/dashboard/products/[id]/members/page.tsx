'use client'

import { useSearchParams } from 'next/navigation'
import Modules from '../members/modules/page'
import Students from '../members/students/page'

export default function MembersPage() {
	const searchParams = useSearchParams()

	const tab = searchParams.get('tab') || 'modules'

	return (
		<div>
			{tab === 'modules' && <Modules />}
			{tab === 'students' && <Students />}
		</div>
	)
}
