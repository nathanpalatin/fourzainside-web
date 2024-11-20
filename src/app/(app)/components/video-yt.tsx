'use client'

import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-youtube'

interface VideoProps {
	video: string
	autoplay?: boolean
}

export function VideoPlayerYT({ video, autoplay = false }: VideoProps) {
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

	useEffect(() => {
		if (!playerRef.current) {
			const videoElement = document.createElement('video-js')
			videoElement.classList.add('vjs-big-play-centered')
			videoRef.current.appendChild(videoElement)
			playerRef.current = videojs(videoElement, videoJsOptions, () => {
				console.log('Player is ready')
			})

			playerRef.current.el().oncontextmenu = e => e.preventDefault()

			return () => {
				if (playerRef.current) {
					playerRef.current.dispose()
					playerRef.current = null
				}
			}
		}
	}, [videoJsOptions])

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
