'use client'

import { CheckIcon, Square } from 'lucide-react'
import { useState } from 'react'

interface WatchProps {
	watch: boolean
	lessonId: string
}

export function ButtonProgress({ watch }: WatchProps) {
	const [watched, setWatched] = useState(watch)

	async function handleProgress() {
		setWatched(!watched)

		//await setProgressLesson()
	}
	return (
		<button
			onClick={handleProgress}
			className={` ${
				watched ? 'bg-green-800' : 'bg-zinc-800'
			} text-sm rounded p-2 items-center flex gap-2`}
		>
			{watched ? <CheckIcon /> : <Square />}
			Marcar como assistida
		</button>
	)
}
