import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // TODO: Replace with your real DB lookup
        // Example: const user = await db.user.findUnique({ where: { email: credentials?.email } })
        // if (user && bcrypt.compareSync(credentials?.password, user.password)) return user
        if (credentials?.email && credentials?.password) {
          return {
            id: '1',
            name: 'Demo User',
            email: credentials.email,
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/',   // redirect back to homepage (modal handles UI)
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        (session.user as any).id = token.sub
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) token.sub = user.id
      return token
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
