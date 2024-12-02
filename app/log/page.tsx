import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"

import { LogPosts } from '@/components/posts'
import { testPosts } from "@/lib/test-posts"
import { PostItem } from "@/components/post-item"
import { DashboardShell } from "@/components/shell"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function LogPage() {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login")
  // }

  const posts = testPosts;

  return (
    <section>
      {/* <LogPosts /> */}
      <DashboardShell className="items-center content-center text-center">
      <DashboardHeader heading="Logs" text="Entries from others around you.">
        {/* <PostCreateButton /> */}
        <Button>
          New Entry
        </Button>
        <Button className="mx-8">
          Published
        </Button>
        <Button>
          View Drafts
        </Button>
      </DashboardHeader>
        {posts?.length ? (
          <div className="divide-y divide-border rounded-md">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any posts yet. Start creating content.
            </EmptyPlaceholder.Description>
            {/* <PostCreateButton variant="outline" /> */}
          </EmptyPlaceholder>
        )}
    </DashboardShell>
    </section>
  )
}