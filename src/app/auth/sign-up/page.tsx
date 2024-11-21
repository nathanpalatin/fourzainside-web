import { SignUpForm } from './sign-up-form'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'

export default function SignUpPage() {
	return (
		<div className="flex h-screen justify-center items-center w-screen">
			<div className="flex w-full flex-col items-center justify-between ">
				<SignUpForm />

				<div className="fixed bottom-5 right-5 z-10">
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	)
}
