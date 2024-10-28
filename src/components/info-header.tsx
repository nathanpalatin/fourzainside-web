'use client'

import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'

export function InfoFinance() {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 400)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className="flex items-center w-[600px] gap-2 ">
			<h1 className="text-sm">Qualidade financeira</h1>
			<Progress value={progress} className="dark:bg-zinc-600 w-[30%]" />
			<h1 className="text-sm">65%</h1>
		</div>
	)
}
