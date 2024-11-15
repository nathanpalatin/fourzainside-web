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
import { Edit3Icon } from 'lucide-react'
import Image from 'next/image'

export default function Account() {
	return (
		<>
			<div className="px-6 py-4">
				<div className="flex justify-between gap-4">
					<div className="w-4/12">
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
										<Image
											alt=""
											className=" size-12 object-cover"
											src="https://cdn.icon-icons.com/icons2/3042/PNG/512/instagram_logo_icon_189247.png"
											width={80}
											height={80}
										/>
										<Image
											alt=""
											className=" size-12 object-cover"
											src="https://cdn.icon-icons.com/icons2/3042/PNG/512/instagram_logo_icon_189247.png"
											width={80}
											height={80}
										/>
										<Image
											alt=""
											className=" size-12 object-cover"
											src="https://cdn.icon-icons.com/icons2/3042/PNG/512/instagram_logo_icon_189247.png"
											width={80}
											height={80}
										/>
										<Image
											alt=""
											className=" size-12 object-cover"
											src="https://cdn.icon-icons.com/icons2/3042/PNG/512/instagram_logo_icon_189247.png"
											width={80}
											height={80}
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
										<Image
											alt=""
											className=" size-18 object-cover"
											src="https://i.ibb.co/Svv8RRj/Badge-Conversion.png"
											width={80}
											height={80}
										/>
										<Image
											alt=""
											className=" size-18 object-cover"
											src="https://i.ibb.co/Svv8RRj/Badge-Conversion.png"
											width={80}
											height={80}
										/>
										<Image
											alt=""
											className=" size-18 object-cover"
											src="https://i.ibb.co/Svv8RRj/Badge-Conversion.png"
											width={80}
											height={80}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-8/12">
						<div className="bg-zinc-900 border border-zinc-800 h-52 rounded"></div>
					</div>
				</div>
			</div>
		</>
	)
}
