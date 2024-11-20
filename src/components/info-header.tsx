import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/icon.png'

export async function InfoHeader() {
	return (
		<Link href={`/`}>
			<Image
				alt="logo"
				className="object-cover w-full h-5"
				src={logo}
				width={300}
				height={40}
			/>
		</Link>
	)
}
