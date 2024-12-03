import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"

import { LogPosts } from '@/components/posts'
import { testPosts } from "@/lib/test-posts"
import { PostItem } from "@/components/post-item"
import { DashboardShell } from "@/components/shell"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"

export default function DraftsLogPage() {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login")
  // }

  const posts = testPosts;

  return (
    <section>
      {/* <LogPosts /> */}
      <DashboardShell className="items-center content-center text-center">
      <DashboardHeader heading="Your Log Drafts" text="All your drafts that are not published.">
        {/* <PostCreateButton /> */}
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