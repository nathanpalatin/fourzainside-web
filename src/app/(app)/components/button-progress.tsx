'use client'

import { CheckIcon, Square } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface WatchProps {
	watch: boolean
}

export function ButtonProgress({ watch }: WatchProps) {
	const [watched, setWatched] = useState(watch)

	function handleProgress() {
		setWatched(!watched)
		toast('Progresso atulizado!', {
			description: 'Parabéns, continue assim...',
			duration: 30000,
			classNames: {
				toast: 'flex flex-col justify-center items-start bg-zinc-600 text-foreground rounded-xl shadow-lg'
			}
		})
	}

	return (
		<button
			onClick={handleProgress}
			className={` ${watched ? 'bg-green-800' : 'bg-zinc-800'} text-sm rounded p-2 items-center flex gap-2`}
		>
			{watched ? <CheckIcon /> : <Square />}
			Marcar como assistida
		</button>
	)
}
