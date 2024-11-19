import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/icon.png'

export async function InfoHeader() {
	return (
		<Link href={`/`}>
			<Image
				alt="logo"
				className="object-cover size-10 mix-blend-lighten"
				src={logo}
				width={40}
				height={40}
			/>
		</Link>
	)
}
