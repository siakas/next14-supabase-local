import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"

// データ削除用 API
export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const postById = await prisma.post.delete({
    where: {
      id: parseInt(id),
    },
  })

  if (!postById) {
    return NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 500,
      },
    )
  }

  return NextResponse.json({})
}
