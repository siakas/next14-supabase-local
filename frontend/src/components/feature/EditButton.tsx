import Link from "next/link"
import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  id: number
}

const EditButton = ({ id }: Props) => {
  return (
    <Button asChild variant="outline" size="icon">
      <Link href={`/post/edit/${id}`}>
        <Pencil className="size-4" />
      </Link>
    </Button>
  )
}

export default EditButton
