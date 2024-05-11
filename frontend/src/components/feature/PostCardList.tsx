import PostCard from "@/components/feature/PostCard"
import type { Post } from "@/types/types"

type Props = {
  posts: Post[]
}

const PostCardList = ({ posts }: Props) => {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostCardList
