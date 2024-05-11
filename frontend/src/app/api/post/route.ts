import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"

export async function GET() {
  // Prisma Client を使ってデータを取得
  const allBBSPosts = await prisma.post.findMany()
  return NextResponse.json(allBBSPosts)
}
