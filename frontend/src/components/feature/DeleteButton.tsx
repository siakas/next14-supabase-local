"use client"

import { useRouter } from "next/navigation"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  id: number
}

const DeleteButton = ({ id }: Props) => {
  const router = useRouter()

  const onClick = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/post/delete/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      // router.push("/")
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button variant="outline" size="icon" onClick={() => onClick(id)}>
      <Trash2 className="size-4" />
    </Button>
  )
}

export default DeleteButton
