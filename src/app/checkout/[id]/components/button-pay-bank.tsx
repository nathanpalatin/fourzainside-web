import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface PaymentProps {
	img: StaticImageData
	link: string
}
export function PaymentThird({ img, link }: PaymentProps) {
	return (
		<Button className="border border-zinc-300 rounded-full px-8 h-7">
			<Link rel="noopener" href={link}>
				<Image
					src={img}
					alt="payment"
					priority
					quality={100}
					width={40}
					height={20}
				/>
			</Link>
		</Button>
	)
}
