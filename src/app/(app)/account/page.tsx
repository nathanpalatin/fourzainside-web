import { auth } from '@/auth/auth'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { deleteAccount } from '@/http/delete-account'
import dayjs from 'dayjs'
import {
	BabyIcon,
	DockIcon,
	Edit3Icon,
	EyeIcon,
	KeyIcon,
	LockIcon,
	MailIcon,
	MapIcon,
	MapPinIcon,
	PersonStanding,
	Phone,
	PhoneCall,
	Scroll,
	Shell,
	Skull,
	User2,
	XCircleIcon,
	XIcon
} from 'lucide-react'
import Image from 'next/image'
import { DeleteAccount } from './components/delete-account'
import { SocialIcon } from 'react-social-icons'
import { Ensign } from './components/ensigns'

export default async function Account() {
	const { user } = await auth()

	return (
		<>
			<div className="px-6 pt-4 pb-14">
				<div className="flex justify-between gap-4">
					<div className="w-3/12">
						<div className="flex flex-col space-y-2">
							<div className="bg-zinc-900 border border-zinc-800 rounded ">
								<div className="p-4">
									<div className="flex justify-between items-center gap-2">
										<h1>Links</h1>
										<AlertDialog>
											<AlertDialogTrigger>
												<Edit3Icon size={18} />
											</AlertDialogTrigger>
											<AlertDialogContent>
												<AlertDialogHeader>
													<AlertDialogTitle>
														Are you absolutely sure?
													</AlertDialogTitle>
													<AlertDialogDescription>
														This action cannot be undone. This will permanently
														delete your account and remove your data from our
														servers.
													</AlertDialogDescription>
												</AlertDialogHeader>
												<AlertDialogFooter>
													<AlertDialogCancel>Cancel</AlertDialogCancel>
													<AlertDialogAction>Continue</AlertDialogAction>
												</AlertDialogFooter>
											</AlertDialogContent>
										</AlertDialog>
									</div>
									<div className="flex items-center gap-1 mt-3">
										<SocialIcon
											fgColor="white"
											bgColor="transparent"
											className="rounded-full bg-zinc-700"
											network="instagram"
											url="https://instagram.com"
											target="_new"
										/>
										<SocialIcon
											fgColor="white"
											bgColor="transparent"
											className="rounded-full bg-zinc-700"
											network="facebook"
											url="https://facebook.com"
											target="_new"
										/>
										<SocialIcon
											fgColor="white"
											bgColor="transparent"
											className="rounded-full bg-zinc-700"
											network="youtube"
											url="https://youtube.com"
											target="_new"
										/>
										<SocialIcon
											fgColor="white"
											bgColor="transparent"
											className="rounded-full bg-zinc-700"
											network="tiktok"
											url="https://tiktok.com"
											target="_new"
										/>
									</div>
								</div>
							</div>
							<div className="bg-zinc-900 border border-zinc-800 rounded">
								<div className="p-4">
									<h1 className="flex items-center gap-2 text-sm">
										Insígnias{' '}
										<div className="size-1 bg-zinc-600 rounded-full" />3
									</h1>
									<div className="flex items-center gap-3 mt-3">
										<Ensign />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-9/12">
						<div className="bg-zinc-900 border border-zinc-800  rounded">
							<div className="p-4">
								<h1 className="text-xl flex items-center gap-3">
									<EyeIcon size={20} />
									Visão geral
								</h1>
								<div className="mt-4">
									<h1 className="text-lg gap-3 text-zinc-300">
										Assinaturas e compras{' '}
										<a href="" className="text-indigo-500 text-sm pl-5">
											Gerenciar
										</a>
									</h1>
								</div>
								<div className="w-full mt-5 h-32 bg-zinc-900 rounded border flex border-zinc-800">
									<div className="flex flex-1 items-center px-6">
										<img
											className="rounded shadow-sm size-20 object-contain border border-zinc-600"
											src="https://static.wixstatic.com/media/86af11_d5d0dd5675824516862756f3617a806b~mv2.png/v1/fill/w_260,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Apresenta%C3%A7%C3%A3o%20Maia%20Giacomelli%20(2).png"
										/>
										<div className="ml-4 flex flex-col">
											<h1 className="font-semibold">
												Reset Intestino - Assinatura anual
											</h1>
											<p className="text-indigo-300 text-sm">
												Renovação automática
											</p>
										</div>
									</div>
									<div className="pr-6 flex flex-col justify-center">
										<p className="text-zinc-500 text-xs text-right">
											Renova em
										</p>
										<h1 className="text-sm">15/12/2024</h1>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-zinc-900 border mt-4 border-zinc-800  rounded">
							<div className="p-4">
								<h1 className="text-xl flex gap-2 items-center">
									<Scroll size={20} /> Certificados
								</h1>
								<div className="mt-4">
									<h1 className="text-sm gap-3 text-zinc-400">
										Não há certificados disponíveis. Consulte o{' '}
										<a href="" className="text-indigo-500">
											catálogo
										</a>{' '}
										para começar algo novo ou continuar de onde parou.
									</h1>
								</div>
								{/* 	<div className="w-full mt-5 h-32 bg-zinc-800 rounded border flex border-zinc-700">
									<div className="flex flex-1 items-center px-6">
										<img
											className="rounded size-20 object-cover border border-zinc-600"
											src="https://static.wixstatic.com/media/86af11_d5d0dd5675824516862756f3617a806b~mv2.png/v1/fill/w_260,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Apresenta%C3%A7%C3%A3o%20Maia%20Giacomelli%20(2).png"
										/>
										<div className="ml-4 flex flex-col">
											<h1 className="font-semibold">
												Reset Intestino - Assinatura anual
											</h1>
											<p className="text-indigo-300 text-sm">
												Renovação automática
											</p>
										</div>
									</div>
									<div className="pr-6 flex flex-col justify-center">
										<p className="text-zinc-500 text-xs text-right">
											Renova em
										</p>
										<h1 className="text-sm">15/11/2024</h1>
									</div>
								</div> */}
							</div>
						</div>
						<div className="bg-zinc-900 border mt-4 border-zinc-800  rounded">
							<div className="p-4">
								<h1 className="text-xl flex items-center gap-3">
									<KeyIcon size={20} /> Dados de acesso
									<a href="" className="text-indigo-500 text-sm pt-1 pl-4">
										Alterar
									</a>
								</h1>
								<div className="mt-4">
									<h1 className="text-sm flex items-center gap-2 text-zinc-400">
										<MailIcon size={16} /> {user.email}
									</h1>
									<h1 className="text-lg flex items-center gap-2 text-zinc-400">
										<LockIcon size={16} />{' '}
										<span className="pt-2">*********</span>
									</h1>
								</div>
							</div>
						</div>
						<div className="bg-zinc-900 border mt-4 border-zinc-800  rounded">
							<div className="p-4">
								<h1 className="text-xl flex items-center gap-3">
									<User2 size={20} /> Dados pessoais
									<a href="" className="text-indigo-500 text-sm pt-1 pl-4">
										Alterar
									</a>
								</h1>
								<div className="grid grid-cols-2">
									<div className="mt-4 space-y-2">
										<h1 className="text-lg flex items-center gap-2 text-zinc-400">
											<PersonStanding size={20} /> {user.name}
										</h1>
										<h1 className="text-sm flex items-center gap-2 text-zinc-400">
											<DockIcon size={18} /> CPF: {user.cpf ?? 'não definido'}
										</h1>
										<h1 className="text-sm flex items-center gap-2 text-zinc-400">
											<BabyIcon size={18} /> Nascimento:{' '}
											{user.birthdate
												? dayjs(user.birthdate).format('DD/MM/YYYY')
												: '---------'}
										</h1>
										<h1 className="text-sm flex items-center gap-2 text-zinc-400">
											<Shell size={18} /> Gênero: {user.gender ?? '-----'}
										</h1>
									</div>
									<div className="mt-4 space-y-2">
										<h1 className="text-sm flex items-center gap-2 text-zinc-400">
											<Phone size={16} /> {user.phone}
										</h1>
										<h1 className="text-sm flex items-center gap-2 text-zinc-400">
											<MapPinIcon size={16} /> Balneário Camboriú, SC
										</h1>
									</div>
								</div>
							</div>
						</div>
						<div className="h-px w-full my-6 bg-zinc-800" />
						<DeleteAccount />
					</div>
				</div>
			</div>
		</>
	)
}
