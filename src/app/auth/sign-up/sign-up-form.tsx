'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { AlertTriangle, Loader2 } from 'lucide-react'

import backgroundHome from '@/assets/background-home.png'
import logo from '@/assets/icon.png'
import logoLight from '@/assets/icon-light.png'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PhoneInput } from '@/components/ui/phone-input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { requestSignUpAction } from './actions'
import { useFormState } from '@/hooks/use-form-state'

export function SignUpForm() {
	const [{ errors, message, success }, handleSubmit, isPending] =
		useFormState(requestSignUpAction)

	const { theme } = useTheme()

	return (
		<>
			<div
				className={`h-screen w-screen absolute top-0 left-0 -z-0 dark:bg-zinc-900/95 bg-zinc-200/80
				 backdrop-blur-sm`}
			/>
			<Image
				alt="background"
				className="h-screen absolute top-0 left-0 w-screen object-cover -z-10"
				quality={100}
				width={500}
				height={500}
				src={backgroundHome}
			/>

			<div className="z-50">
				<Image
					alt="logo vance"
					width={160}
					className="mx-auto mb-10 animate-pulse-slow"
					height={100}
					src={theme != 'light' ? logo : logoLight}
				/>
				<h1 className="font-semibold text-sm text-center">
					Ficamos felizes que queira usar a Vance em seus negócios.
				</h1>
				<p className=" text-center text-sm font-normal">
					Por favor, preencha os dados abaixo:
				</p>
				<div className="w-[340px] mt-4 mx-auto">
					<form onSubmit={handleSubmit} className="space-y-4">
						{!success && message && (
							<Alert variant="destructive">
								<AlertTriangle className="size-4" />
								<AlertTitle>Op, algo deu errado!</AlertTitle>
								<AlertDescription>
									<p>{message}</p>
								</AlertDescription>
							</Alert>
						)}

						<div className="space-y-1">
							<Input
								className="rounded-full text-center border-none dark:bg-zinc-100 bg-[#101010]/5 pt-6 pb-5 text-zinc-900 "
								name="name"
								disabled={isPending}
								placeholder="Qual seu nome completo?"
								id="name"
								aria-label="Nome completo"
							/>
							{errors?.name && (
								<p className="text-xs font-medium text-red-500">
									{errors.name[0]}
								</p>
							)}
						</div>

						<div className="space-y-1">
							<Input
								className="rounded-full text-center border-none dark:bg-zinc-100 bg-[#101010]/5 pt-6 pb-5 text-zinc-900 "
								name="email"
								disabled={isPending}
								placeholder="Qual seu e-mail principal?"
								type="email"
								id="email"
								autoComplete="false"
							/>
							{errors?.email && (
								<p className="text-xs font-medium text-red-500">
									{errors.email[0]}
								</p>
							)}
						</div>

						<div className="space-y-1">
							<PhoneInput
								international
								defaultCountry="BR"
								disabled={isPending}
								name="phone"
								id="phone"
								placeholder="Qual seu WhatsApp?"
								aria-label="Telefone"
							/>
							{errors?.phone && (
								<p className="text-xs font-medium text-red-500">
									{errors.phone[0]}
								</p>
							)}
						</div>
						<p className="text-sm font-semibold text-center text-zinc-700 dark:text-zinc-100 py-3">
							Qual tipo de conta você pretende criar?
						</p>
						<RadioGroup name="type" defaultValue="PERSONAL">
							<div className="flex items-center justify-around">
								<div className="flex items-end space-x-2">
									<RadioGroupItem value="PERSONAL" />
									<Label htmlFor="r1">Conta Pessoa Física</Label>
								</div>

								<div className="flex items-end space-x-2">
									<RadioGroupItem value="COMPANY" />
									<Label htmlFor="r3">Conta Pessoa Jurídica</Label>
								</div>
							</div>
						</RadioGroup>
						<div className="h-2 " />

						<Input
							className="rounded-full text-center border-none dark:bg-zinc-100 bg-[#101010]/5 pt-6 pb-5 text-zinc-900 "
							name="call"
							placeholder="E como você gostaria de ser chamado?"
							disabled={isPending}
							id="password"
						/>
						{errors?.password && (
							<p className="text-xs font-medium text-red-500">
								{errors.password[0]}
							</p>
						)}
						<div className="h-2 " />
						<Button
							className="w-full rounded-full pt-6 pb-5 border-2 dark:text-zinc-200 bg-transparent dark:border-zinc-100 border-zinc-900 text-zinc-900"
							type="submit"
							disabled={isPending}
						>
							{isPending ? (
								<Loader2 className="size-4 animate-spin" />
							) : (
								'Solicitar abertura de conta'
							)}
						</Button>
					</form>
				</div>
				<div className="mt-5 mx-auto text-center">
					<Link
						href="/auth/sign-in"
						className="dark:text-zinc-400 text-zinc-800 text-sm font-normal hover:no-underline dark:hover:text-zinc-200"
					>
						Voltar
					</Link>
				</div>
			</div>
		</>
	)
}
