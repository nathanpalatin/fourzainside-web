import { ThemeSwitcher } from '@/components/theme/theme-switcher'

import Image from 'next/image'

import { SignUpForm } from './sign-up-form'
import { BlurImageWithText } from '@/components/background-home'
import backgroundHome from '@/assets/background-home.png'
/* import logo from '@/assets/logo-home.png' */

export default function SignInPage() {
	return (
		<div className="flex h-screen w-screen">
			<div className="flex w-full flex-col items-center justify-between bg-zinc-100 pb-10 dark:bg-zinc-950 md:w-4/12">
				<div className="flex h-full items-center justify-center">
					<SignUpForm />
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
				{/* <BlurImageWithText
					logo={logo.src}
					src={backgroundHome.src}
					alt="Background Image"
					initialBlurDelay={1200}
					textAppearDelay={2000}
				/> */}
			</div>
		</div>
	)
}
