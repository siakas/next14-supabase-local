import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"

// データ更新用 API
export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const { username, title, content } = await req.json()

  const postById = await prisma.post.update({
    where: {
      id: parseInt(id),
    },
    data: {
      username,
      title,
      content,
    },
  })

  return NextResponse.json({ postById })
}
