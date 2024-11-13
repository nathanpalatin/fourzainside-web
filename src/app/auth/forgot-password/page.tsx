'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import backgroundHome from '@/assets/background-home.png'
/* import logo from '@/assets/logo.png' */
/* import logoLight from '@/assets/logo-light.png' */
import { ThemeSwitcher } from '@/components/theme/theme-switcher'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { forgotPassword } from './actions'

export default function ForgotPasswordPage() {
	const { theme } = useTheme()
	return (
		<div className="flex h-screen w-screen">
			<div className="flex h-screen w-full flex-col justify-center bg-zinc-100 dark:bg-zinc-950 md:w-4/12">
				<div className="flex flex-1 flex-col items-center justify-center">
					<form action={forgotPassword} className="space-y-4">

						<div className="space-y-1">
							<Input
								placeholder="E-mail cadastrado"
								className="w-[250px] rounded-xl border-2 border-zinc-500/40 bg-zinc-200/60 px-4  py-5 text-zinc-700 dark:bg-transparent"
								name="email"
								type="email"
								id="email"
							/>
						</div>

						<Button
							className=" w-full rounded-xl border-2 border-zinc-800/50 bg-zinc-800 p-2 transition-colors hover:bg-zinc-200  dark:bg-zinc-800 dark:text-zinc-200 "
							type="submit"
						>
							Enviar
						</Button>

						<Button className="w-full" variant="link" size="sm" asChild>
							<Link href="/auth/sign-in" className="text-xs text-zinc-600 hover:no-underline">
								Fazer login
							</Link>
						</Button>
					</form>
				</div>
				<div className="mb-10 flex justify-center">
					<ThemeSwitcher />
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
