import type { Post } from "@/types/types"

export const fetchPostById = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  })
  const post: Post = await res.json()

  return post
}
