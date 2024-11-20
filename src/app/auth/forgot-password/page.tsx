import Image from 'next/image'

import backgroundHome from '@/assets/background-home.png'

import { ForgetPasswordForm } from './forgot-password-form'

export default function ForgotPasswordPage() {
	return (
		<div className="flex h-screen w-screen">
			<div className="flex h-screen w-full flex-col justify-center bg-zinc-100 dark:bg-zinc-950 md:w-4/12">
				<div className="flex flex-1 flex-col items-center justify-center">
					<ForgetPasswordForm />
				</div>
				<div className="mb-10 flex justify-center">
					<h1 className="text-xs text-zinc-400">© 2024 Fourza Inside</h1>
				</div>
			</div>

			<div className="hidden h-full w-8/12 md:block">
				<Image
					alt="background"
					className="h-screen w-screen object-cover"
					quality={100}
					width={500}
					height={500}
					src={backgroundHome}
				/>
			</div>
		</div>
	)
}
