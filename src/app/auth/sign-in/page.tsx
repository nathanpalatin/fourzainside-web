import Image from 'next/image'

import backgroundHome from '@/assets/background-home.png'

import { SignInForm } from './sign-in-form'

export default function SignInPage() {
	return (
		<div className="flex h-screen justify-center items-center w-screen">
			<div className="flex w-full flex-col items-center justify-between ">
				<div className="h-screen w-screen absolute top-0 -z-0 bg-zinc-900/95 backdrop-blur-sm" />
				<Image
					alt="background"
					className="h-screen absolute top-0 left-0 w-screen object-cover -z-10"
					quality={100}
					width={500}
					height={500}
					src={backgroundHome}
				/>
				<SignInForm />
				<h1 className="text-xs text-zinc-400">© 2024 Vance</h1>
			</div>
		</div>
	)
}
