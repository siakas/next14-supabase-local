import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"

export async function GET() {
  // Prisma Client を使ってすべての記事データを取得
  const allPosts = await prisma.post.findMany()

  return NextResponse.json(allPosts)
}
