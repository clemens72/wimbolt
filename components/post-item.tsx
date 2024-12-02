import Link from "next/link"
import { NewPost } from '@/models/Post'
import { testPosts } from "@/lib/test-posts"

import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import dogsq from "@/assets/dogsq.jpg"

//import { PostOperations } from "@/components/post-operations"

interface PostItemProps {
  post: Pick<NewPost, "id" | "title" | "body" | "avatar">
}

export function PostItem({ post }: PostItemProps) {
  return (
    <div className="flex flex-col items-center m-auto mb-4 p-12 max-w-2xl justify-center rounded-md border border-solid text-center animate-in fade-in-50 bg-gradient-to-r from-neutral-50 to-stone-200">
      <div className="w-1/2">
        <div className="mx-auto flex flex-col h-20 w-20 justify-center rounded-full">
        <Image className="rounded-full"
              src={post.avatar}
              width={100}
              height={100}
              alt="dog"
            />
        </div>
        <Link
          href={`/editor/${post.id}`}
          className="font-semibold hover:underline"
        >
          {post.title}
        </Link>
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">{post.body}
            {/* {formatDate(post.createdAt?.toDateString())} */}
          </p>
        </div>
      </div>
      {/* <PostOperations post={{ id: post.id, title: post.title }} /> */}
    </div>
  )
}

PostItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}