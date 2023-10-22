import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prismaclient } from "@/lib/prisma"

// const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prismaclient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_I,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
})
