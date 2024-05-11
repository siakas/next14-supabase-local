import PostCardList from "@/components/feature/PostCardList"
import type { Post } from "@/types/types"

const fetchAllPosts = async () => {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  })
  const allPosts: Post[] = await res.json()

  return allPosts
}

export default async function Home() {
  const allPosts = await fetchAllPosts()

  return (
    <main>
      <PostCardList posts={allPosts} />
    </main>
  )
}
