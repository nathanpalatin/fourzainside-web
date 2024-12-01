'use client'

import { useParams, useSearchParams } from 'next/navigation'
import Modules from './members/modules/page'
import Students from './members/students/page'

export default function MembersPage() {
	const searchParams = useSearchParams()
	const { id } = useParams<{ id: string }>()
	const tab = searchParams.get('tab') || 'modules'

	return (
		<div>
			{tab === 'modules' && <Modules idProduct={id} />}
			{tab === 'students' && <Students />}
		</div>
	)
}
