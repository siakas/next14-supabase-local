import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, adipisci
        suscipit labore rem itaque unde asperiores laborum delectus eaque
        blanditiis. Ab id, qui non nisi accusamus quis natus rem commodi.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/bbs-posts/1" className="text-blue-500">
          Read more
        </Link>
      </CardFooter>
    </Card>
  )
}

export default BBSCard
