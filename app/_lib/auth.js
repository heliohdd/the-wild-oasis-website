import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
};

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(authConfig);
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [Google],
// });
