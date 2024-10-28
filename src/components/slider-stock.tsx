'use client'
import Slider from 'react-slick'

export function StockCarousel({ stocks }) {
	const settings = {
		dots: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 0
	}

	return (
		<Slider {...settings}>
			{stocks.map((stock, index) => (
				<div className="flex ml-96  w-full bg-red-500" key={index}>
					<h3>{stock.stock}</h3>
					<p>Preço: {stock.price}</p>
				</div>
			))}
		</Slider>
	)
}
