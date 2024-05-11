// import { NextResponse } from "next/server"
// import prisma from "@/lib/prismaClient"

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  // Prisma Client を使って id に応じたデータを取得
  const bbsId = params.id

  // const allBBSPosts = await prisma.post.findMany()
  // return NextResponse.json(allBBSPosts)
}
