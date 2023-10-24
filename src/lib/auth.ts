import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { prismaclient } from "./prisma";

export const authOptions: AuthOptions = {
   
  adapter: PrismaAdapter(prismaclient),
  providers: [
    GoogleProvider({
  
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      
    }),
  ],
}

