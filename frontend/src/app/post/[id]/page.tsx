import Link from "next/link"
import { fetchPostById } from "@/lib/postHandlers"

const PostByIdPage = async ({ params }: { params: { id: number } }) => {
  const post = await fetchPostById(params.id)
  const { title, content, username } = post

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-700">{username}</p>
      </div>
      <div className="mb-8">
        <p className="text-gray-900">{content}</p>
      </div>

      <Link
        href="/"
        className="rounded-md bg-blue-500 px-4 py-2 font-bold text-white"
      >
        戻る
      </Link>
    </div>
  )
}

export default PostByIdPage
