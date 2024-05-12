import Link from "next/link"
import DeleteButton from "@/components/feature/DeleteButton"
import EditButton from "@/components/feature/EditButton"
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
        <Link href={`/post/${id}`} className="text-blue-500">
          Read more
        </Link>
        <div className="flex items-center gap-2">
          <EditButton id={id} />
          <DeleteButton id={id} />
        </div>
      </CardFooter>
    </Card>
  )
}

export default PostCard
