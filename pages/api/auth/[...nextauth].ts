import NextAuth from 'next-auth/next';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_ID;
  const clientSecret = process.env.GOOGLE_SECRET;

  if (!clientId || clientId.length === 0) {
    throw new Error('Missing google client id');
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing google client secret');
  }

  return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    redirect() {
      return '/chat';
    },
  },
};

export default NextAuth(authOptions);
