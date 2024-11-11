import { EmailForm } from './email-validation-form'

import { ThemeSwitcher } from '@/components/theme/theme-switcher'
import { BlurImageWithText } from '@/components/background-home'

import backgroundHome from '@/assets/background-home.png'
/* import logo from '@/assets/logo-home.png' */

export default function EmailValidation() {
	return (
		<div className="flex h-screen w-screen">
			<div className="flex w-full flex-col items-center justify-between bg-zinc-100 pb-10 dark:bg-zinc-950 md:w-4/12">
				<div className="flex h-full items-center justify-center">
					<EmailForm />
				</div>
				<ThemeSwitcher />
			</div>
			<div className="hidden h-full w-8/12 md:block">
				{/* 	<BlurImageWithText
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
