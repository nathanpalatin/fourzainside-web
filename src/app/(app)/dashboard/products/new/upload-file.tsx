'use client'

import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { uploadFile } from '@/http/upload-file'

export function UploadFile() {
	const [imagePreview, setImagePreview] = useState<string | null>(null)
	const [urlImage, setUrl] = useState<string | null>(null)
	const [uploadProgress, setUploadProgress] = useState<number>(0)
	const [isUploading, setIsUploading] = useState<boolean>(false)

	async function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0]
		if (file) {
			setIsUploading(true)
			const formData = new FormData()
			formData.append('file', file)

			if (file.type.startsWith('video/')) {
				const videoThumbnail = await generateVideoThumbnail(file)
				setImagePreview(videoThumbnail)
			} else if (file.type.startsWith('image/')) {
				const previewUrl = URL.createObjectURL(file)
				setImagePreview(previewUrl)
			}

			try {
				const { url } = await uploadFile({ file })
				setUrl(url)
				setUploadProgress(100)
			} catch (error) {
				console.log('Upload failed', error)
			} finally {
				setIsUploading(false)
			}
		} else {
			setImagePreview(null)
		}
	}

	async function generateVideoThumbnail(file: File): Promise<string> {
		return new Promise((resolve, reject) => {
			const video = document.createElement('video')
			const canvas = document.createElement('canvas')
			const context = canvas.getContext('2d')

			if (!context) {
				reject('Canvas context is not available')
				return
			}

			video.src = URL.createObjectURL(file)
			video.crossOrigin = 'anonymous'

			video.onloadeddata = () => {
				video.currentTime = 1
			}

			video.onseeked = () => {
				canvas.width = video.videoWidth
				canvas.height = video.videoHeight
				context.drawImage(video, 0, 0, canvas.width, canvas.height)
				const thumbnail = canvas.toDataURL('image/png')
				resolve(thumbnail)
			}

			video.onerror = () => reject('Erro ao carregar o vídeo')
		})
	}

	return (
		<>
			<Input
				name="file"
				type="file"
				onChange={handleImageChange}
				className="rounded-xl w-full border-2 text-sm border-zinc-500/40 bg-zinc-200/60 px-3 file:text-green-500 dark:bg-transparent dark:text-zinc-400"
			/>

			{imagePreview && (
				<div className="w-full flex justify-center my-4">
					<img
						src={imagePreview}
						alt="Preview"
						className="rounded-xl w-full max-w-md h-52 object-cover"
					/>
				</div>
			)}
			<h1 className="text-white">{urlImage}</h1>

			{isUploading && (
				<div className="w-full max-w-md mx-auto">
					<div className="h-2 bg-gray-300 rounded-full">
						<div
							className="h-2 bg-green-500 rounded-full"
							style={{ width: `${uploadProgress}%` }}
						></div>
					</div>
					<p className="text-center text-sm text-gray-600 mt-1">
						Uploading... {uploadProgress}%
					</p>
				</div>
			)}
		</>
	)
}
