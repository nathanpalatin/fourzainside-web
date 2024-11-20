import { EmailForm } from './email-validation-form'

import Image from 'next/image'
import backgroundHome from '@/assets/background-home.png'

export default async function EmailValidation() {
	return (
		<div className="flex h-screen w-screen">
			<div className="flex w-full flex-col items-center justify-between bg-zinc-100 pb-10 dark:bg-zinc-950 md:w-4/12">
				<div className="flex h-full items-center justify-center">
					<EmailForm />
				</div>
				<h1 className="text-xs text-zinc-400">© 2024 Fourza Inside</h1>
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
