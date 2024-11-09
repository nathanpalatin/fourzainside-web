import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	const response = NextResponse.next()

	if (pathname.startsWith('/dashboard')) {
		const [, , , slug] = pathname.split('/')

		response.cookies.set('platform', slug)
	} else {
		response.cookies.delete('platform')
	}

	return response
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
