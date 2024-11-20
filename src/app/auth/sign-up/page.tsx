import Image from 'next/image'

import backgroundHome from '@/assets/background-home.png'

import { SignUpForm } from './sign-up-form'

export default function SignUpPage() {
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
				<SignUpForm />
			</div>
		</div>
	)
}
