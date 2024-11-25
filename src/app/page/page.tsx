export default function LandingPage() {
	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<header className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
				<div className="container mx-auto px-6 py-12 text-center">
					<h1 className="text-4xl md:text-6xl font-bold leading-tight">
						Connect, Share, and Grow
					</h1>
					<p className="mt-4 text-lg md:text-xl">
						Join the ultimate social platform where communities thrive.
					</p>
					<div className="mt-6">
						<button className="bg-white text-indigo-500 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100">
							Get Started
						</button>
						<button className="ml-4 bg-indigo-500 text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600">
							Learn More
						</button>
					</div>
				</div>
			</header>

			{/* Features Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center text-gray-800">
						Why Choose Us?
					</h2>
					<div className="mt-12 grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="flex justify-center items-center w-16 h-16 mx-auto bg-blue-100 text-blue-500 rounded-full mb-4">
								🌐
							</div>
							<h3 className="text-xl font-semibold text-gray-800">
								Global Connections
							</h3>
							<p className="mt-2 text-gray-600">
								Build relationships and networks across the world.
							</p>
						</div>
						<div className="text-center">
							<div className="flex justify-center items-center w-16 h-16 mx-auto bg-green-100 text-green-500 rounded-full mb-4">
								💬
							</div>
							<h3 className="text-xl font-semibold text-gray-800">
								Real-Time Chat
							</h3>
							<p className="mt-2 text-gray-600">
								Connect with friends through seamless communication.
							</p>
						</div>
						<div className="text-center">
							<div className="flex justify-center items-center w-16 h-16 mx-auto bg-purple-100 text-purple-500 rounded-full mb-4">
								📸
							</div>
							<h3 className="text-xl font-semibold text-gray-800">
								Media Sharing
							</h3>
							<p className="mt-2 text-gray-600">
								Share your best moments with our easy media tools.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call-to-Action */}
			<footer className="py-12 bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold">Ready to Join?</h2>
					<p className="mt-4">
						Start your journey today and make meaningful connections.
					</p>
					<button className="mt-6 bg-white text-indigo-500 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100">
						Sign Up Now
					</button>
				</div>
			</footer>
		</div>
	)
}
