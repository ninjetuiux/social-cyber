import { authOptions } from "@/app/utils/auth"
import NextAuth from "next-auth"

// Handle all requests (GET, POST, etc.) with NextAuth
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}