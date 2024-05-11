import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import type { Post } from "@/types/types"

type Props = {
  post: Post
}

const PostCard = ({ post }: Props) => {
  const { id, title, content, username } = post

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${id}`} className="text-blue-500">
          Read more
        </Link>
      </CardFooter>
    </Card>
  )
}

export default PostCard
