/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { decodeToken } from 'react-jwt';

import NextAuth, { NextAuthOptions, Profile } from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

declare module 'next-auth' {
  interface Session {
    account: any;
    profile: any;
  }

  interface Profile {
    realm_access: any;
  }

  interface Session {
    roles: any;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.SECRET as string,
      issuer: process.env.KEYCLOAK_URL as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      try {
        if (account) {
          const decodedToken = decodeToken(account.access_token as string);

          if (token == null) {
            throw new Error('Unnable to decode token');
          }

          profile = decodedToken as Profile;
          token.account = account;
        }

        if (profile) {
          token.profile = profile;

          const clientRoles = profile.realm_access.roles;
          token.client_roles = clientRoles;
        }
      } catch (error) {
        console.log('Error', error);
      }

      return token;
    },
    async session({ session, token }) {
      session.account = token.account;
      session.profile = token.profile;
      session.roles = token.client_roles;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
