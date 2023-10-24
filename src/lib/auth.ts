
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
   
  adapter: PrismaAdapter(PrismaClient),
  providers: [
    GoogleProvider({
  
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      
    }),
  ],
}

