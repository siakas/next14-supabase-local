import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"

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
