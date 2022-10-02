import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import { db } from "../../../firebase.config";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import * as fireAllFunctions from "firebase/firestore";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  adapter: FirebaseAdapter({
    db: db,
    ...fireAllFunctions,
  }),
});
