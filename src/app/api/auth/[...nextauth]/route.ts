import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { prismaclient } from "@/lib/prisma"

// const prisma = new PrismaClient()

// export default NextAuth({
//   adapter: PrismaAdapter(prismaClient),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET
//     })
//   ]
// })