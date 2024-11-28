'use client'

import { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/icon.png'
import { Separator } from '@/components/ui/separator'
import { VideoWebinar } from '../(app)/components/video-webinar'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Send } from 'lucide-react'

export default function Webinar() {
	const [messages, setMessages] = useState([])
	const [inputValue, setInputValue] = useState('')

	const handleSend = () => {
		if (inputValue.trim()) {
			setMessages([...messages, { sender: 'User', text: inputValue }])
			setInputValue('')

			setTimeout(() => {
				setMessages(prev => [
					...prev,
					{
						sender: 'System',
						text: 'Maia: oiiii suas gordaaas!!'
					}
				])
			}, 1000)
		}
	}

	return (
		<div className="px-10 pt-8 w-screen">
			<div className="inline-flex items-center gap-4">
				<Image
					alt="logo"
					src={logo}
					width={150}
					className="opacity-70"
					height={80}
				/>
				<Separator orientation="vertical" className="bg-zinc-400 h-16" />
				<h1 className="text-zinc-400 tracking-wider pt-1">webinar tv</h1>
			</div>

			<div className="flex justify-center items-start my-20">
				<div className="w-7/12">
					<div className="pr-6">
						<VideoWebinar
							webinar
							video="https://www.youtube.com/watch?v=5DnEg170vFg"
						/>
						<div className="mt-10 space-y-3">
							<h1 className="text-2xl font-semibold">
								Titulo da live personalizado
							</h1>
							<p>
								Aqui irá a descrição do que o nosso cliente preferir inserir.
								<br />
								Pode ser uma breve descrição sobre a live dele...
							</p>
						</div>
					</div>
				</div>
				<div className="w-5/12 border-zinc-300 rounded-xl overflow-hidden border min-h-[500px]">
					<Tabs defaultValue="chat" className="h-full w-full">
						<TabsList className="bg-zinc-300 h-14 grid w-full grid-cols-2">
							<TabsTrigger value="chat">Canal de chat</TabsTrigger>
							<TabsTrigger value="support">Suporte</TabsTrigger>
						</TabsList>
						<TabsContent value="chat">
							<div className="flex-1 flex flex-col h-[400px] p-3 space-y-1 overflow-y-auto">
								{messages.map((message, index) => (
									<div
										key={index}
										className={`flex ${
											message.sender === 'User'
												? 'justify-start'
												: 'justify-start'
										}`}
									>
										<div className={`p-2 text-sm rounded-lg max-w-[70%]`}>
											{message.text}
										</div>
									</div>
								))}
							</div>
							<div className="relative bg-zinc-300 p-4">
								<div className="flex items-center gap-2">
									<Input
										value={inputValue}
										onChange={e => setInputValue(e.target.value)}
										className="flex-1 border-none items-center text-zinc-800"
										placeholder="Digite aqui seu comentário..."
									/>
									<Send
										onClick={handleSend}
										className="cursor-pointer w-8 h-8 text-zinc-100 rounded-full bg-zinc-900 p-2"
									/>
								</div>
							</div>
						</TabsContent>
						<TabsContent value="support">
							<div className="h-[400px] flex items-center justify-center">
								<p>Suporte ao vivo em breve...</p>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	)
}
