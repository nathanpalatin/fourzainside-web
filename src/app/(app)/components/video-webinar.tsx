'use client'

import { EyeIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-youtube'

interface VideoProps {
	video: string
	autoplay?: boolean
	webinar?: boolean
}

export function VideoWebinar({
	video,
	autoplay = false,
	webinar = false
}: VideoProps) {
	const [online, setOnline] = useState(1000)

	const videoJsOptions = {
		autoplay,
		controls: true,
		responsive: false,
		fluid: true,
		techOrder: ['youtube'],
		sources: [
			{
				src: video,
				type: 'video/youtube'
			}
		],
		youtube: {
			modestbranding: 1,
			rel: 0,
			iv_load_policy: 3,
			showinfo: 0
		},
		playbackRates: [0.5, 1, 1.5, 2]
	}

	const videoRef = useRef(null)
	const playerRef = useRef(null)

	// Alternador de números
	useEffect(() => {
		function createRandomNumber(callback: (number: number) => void) {
			function toggleNumber() {
				const randomNumber =
					Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000
				callback(randomNumber)
				setTimeout(toggleNumber, 2000)
			}

			toggleNumber()
		}

		createRandomNumber(setOnline)
	}, [])

	// Inicialização do player
	useEffect(() => {
		if (!playerRef.current) {
			const videoElement = document.createElement('video-js')
			videoElement.classList.add('vjs-big-play-centered')
			videoRef.current.appendChild(videoElement)

			playerRef.current = videojs(videoElement, videoJsOptions, () => {
				console.log('Player is ready')
			})

			// Remover menu de contexto
			playerRef.current.el().oncontextmenu = e => e.preventDefault()

			// Cleanup ao desmontar
			return () => {
				if (playerRef.current) {
					playerRef.current.dispose()
					playerRef.current = null
				}
			}
		}
		// Evitar dependências desnecessárias para não recriar o player
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Alternar play/pause
	const togglePlayPause = () => {
		const player = playerRef.current
		if (player) {
			if (player.paused()) {
				player.play()
			} else {
				player.pause()
			}
		}
	}

	return (
		<div
			data-vjs-player
			className="custom-video-player"
			style={{ position: 'relative' }}
		>
			{webinar && (
				<div className="absolute z-50 h-7 rounded-full bg-red-500 -top-3 left-4">
					<h1 className="inline-flex items-center gap-1 px-4">
						<EyeIcon /> <span className="pt-1">{online}</span>
					</h1>
				</div>
			)}

			<div ref={videoRef} className="bg-black rounded-xl overflow-hidden" />
			<div
				onMouseDownCapture={togglePlayPause}
				onContextMenu={e => e.preventDefault()}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 30,
					backgroundColor: 'transparent',
					zIndex: 50,
					cursor: 'pointer'
				}}
			/>
		</div>
	)
}
