export { default } from 'next-auth/middleware'

export const config = { matcher: ['/((?!signIn|signUp).*)', '/admin/:path*'] }
