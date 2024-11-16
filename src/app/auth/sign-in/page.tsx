import Image from 'next/image'

import { ThemeSwitcher } from '@/components/theme/theme-switcher'
import backgroundHome from '@/assets/background-home.png'

import { SignInForm } from './sign-in-form'

export default function SignInPage() {
	return (
		<div className="flex h-screen w-screen">
			<div className="flex w-full flex-col items-center justify-between bg-zinc-100 pb-10 dark:bg-zinc-950 md:w-4/12">
				<div className="flex h-full items-center justify-center">
					<SignInForm />
				</div>
				<ThemeSwitcher />
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
