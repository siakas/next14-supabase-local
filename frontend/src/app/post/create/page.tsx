"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// フォームのスキーマを zod で定義
const formSchema = z.object({
  username: z.string().min(2, {
    message: "ユーザー名は2文字以上で入力してください",
  }),
  title: z.string().min(2, {
    message: "タイトルは2文字以上で入力してください",
  }),
  content: z
    .string()
    .min(10, {
      message: "本文は10文字以上で入力してください",
    })
    .max(140, { message: "本文は140文字以内で入力してください" }),
})

const PostCreatePage = () => {
  const router = useRouter()

  // 1. フォームの型定義
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      title: "",
      content: "",
    },
  })

  // 2. submit 時の処理
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { username, title, content } = values

    try {
      await fetch("http://localhost:3000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, title, content }),
      })
      router.push("/")
      router.refresh() // リフレッシュすることでホーム遷移時に最新のデータが反映される
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-1/2 space-y-3 px-8 py-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ユーザー名</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>タイトル</FormLabel>
              <FormControl>
                <Input placeholder="Lorem ipsum" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>本文</FormLabel>
              <FormControl>
                <Textarea {...field} className="resize-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default PostCreatePage
