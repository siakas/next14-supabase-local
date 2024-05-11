import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"

export async function GET() {
  // Prisma Client を使ってすべての記事データを取得
  const allPosts = await prisma.post.findMany()

  return NextResponse.json(allPosts)
}

// データ投稿用 API
export async function POST(request: Request) {
  // データは request.json() で受け取れる
  const { username, title, content } = await request.json()

  // 受け取ったデータを DB に作成する
  const post = await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  })

  return NextResponse.json(post)
}
