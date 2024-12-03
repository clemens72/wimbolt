import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { PostItem } from "@/components/post-item"
import { testPosts } from "@/lib/test-posts"
import { DashboardShell } from "@/components/shell"

export default async function KnowledgePage() {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login")
  // }

  // const posts = await db.post.findMany({
  //   where: {
  //     authorId: user.id,
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //     published: true,
  //     createdAt: true,
  //   },
  //   orderBy: {
  //     updatedAt: "desc",
  //   },
  // })

  const posts = testPosts;

  return (
    <section>
      {/* <LogPosts /> */}
      <DashboardShell className="items-center content-center text-center">
      <DashboardHeader heading="Knowledge Base Articles" text="Entries from others around you.">
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