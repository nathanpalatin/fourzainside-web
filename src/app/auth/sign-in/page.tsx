import { SignInForm } from './sign-in-form'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'

export default function SignInPage() {
	return (
		<div className="flex h-screen justify-center items-center w-screen">
			<div className="flex w-full flex-col items-center justify-between ">
				<SignInForm />
				<div className="fixed bottom-5 right-5 z-10">
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	)
}
