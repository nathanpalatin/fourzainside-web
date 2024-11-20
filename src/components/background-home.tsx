'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface BlurImageWithTextProps {
	src: string
	alt: string
	logo?: string
	initialBlurDelay?: number
	textAppearDelay?: number
}

export function BlurImageWithText({
	src,
	logo,
	alt,
	initialBlurDelay = 2000,
	textAppearDelay = 4000
}: BlurImageWithTextProps) {
	const [isBlurred, setIsBlurred] = useState(false)
	const [showText, setShowText] = useState(false)
	const [isAnimating, setIsAnimating] = useState(true)

	useEffect(() => {
		const blurTimeout = setTimeout(() => {
			setIsBlurred(true)
		}, initialBlurDelay)

		const textTimeout = setTimeout(() => {
			setShowText(true)

			setTimeout(() => {
				setIsAnimating(false)
			}, 1000)
		}, textAppearDelay)

		return () => {
			clearTimeout(blurTimeout)
			clearTimeout(textTimeout)
		}
	}, [initialBlurDelay, textAppearDelay])

	return (
		<div className="relative h-full w-full">
			<div
				className={`absolute inset-0 bg-zinc-900 transition-opacity duration-1000 ${
					isBlurred ? 'opacity-80' : 'opacity-0'
				}`}
			/>
			<Image
				alt={alt}
				className={`h-full w-full object-cover transition-all duration-1000 ${
					isBlurred ? 'blur-md opacity-30' : 'blur-0'
				}`}
				quality={100}
				fill
				priority
				src={src}
			/>
			{showText && logo && (
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-20">
					<div className="flex flex-col mt-52 items-center text-center">
						<h1
							className={`object-cover transition-all mb-10 opacity-0 duration-1000 text-6xl font-semibold ${
								isAnimating ? 'opacity-0' : 'opacity-100'
							}`}
						>
							Vance
						</h1>
						<h1
							className={` opacity-0 text-white transition-opacity duration-1000 ${
								isAnimating ? 'opacity-0' : 'opacity-100 '
							}`}
						>
							educação para a vida.
						</h1>
					</div>
					<div className="mt-52">
						<p
							className={`text-sm  text-zinc-400 transition-all opacity-0 duration-1000 ${
								isAnimating ? ' opacity-0' : 'opacity-100'
							}`}
						>
							ACG Business
						</p>
					</div>
				</div>
			)}
		</div>
	)
}
