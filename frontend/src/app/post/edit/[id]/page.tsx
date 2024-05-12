import EditPost from "@/components/feature/EditPost"
import { fetchPostById } from "@/lib/postHandlers"

const PostEditPage = async ({ params }: { params: { id: number } }) => {
  const post = await fetchPostById(params.id)

  return <EditPost post={post} />
}

export default PostEditPage
