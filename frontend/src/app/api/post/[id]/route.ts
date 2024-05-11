import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  // Prisma Client を使って id に応じたデータを取得
  const id = params.id
  const postById = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  })

  return NextResponse.json(postById)
}
