import type { Metadata } from "next";
import "@/app/globals.css"
import { notFound } from "next/navigation"
import { getCurrentUser } from "@/lib/session"
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Home, PenTool, Calendar, Scroll, User } from "lucide-react";
import { NavMobile } from "@/components/nav-mobile";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "WiMBL | Knowledge Base",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://wimblapp.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/assets/logo.png",
      },
    ],
  },
}

interface KnowledgeLayoutProps {
  children?: React.ReactNode
}

export default async function KnowledgeLayout({
  children
}: KnowledgeLayoutProps) {
  // const user = await getCurrentUser()


  // if (!user) {
  //   return notFound()
  // }

  const data = {
    navMobile: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
        isActive: true,
      },
      {
        title: "Log",
        url: "/log",
        icon: PenTool,
        isActive: true,
      },
      {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
        isActive: true,
      },
      {
        title: "Knowledge",
        url: "/knowledge",
        icon: Scroll,
        isActive: true,
      },
      {
        title: "Account",
        url: "/account",
        icon: User,
        isActive: true,
      },
    ],
  }


  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <SidebarProvider>
        <aside className="hidden w-auto flex-col md:flex">
          <AppSidebar />
        </aside>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex w-full bg-black md:hidden h-16">
              <SidebarTrigger />
              <Button key={'Dashboard'} variant={'nav'} size={'max'}>
                <a href={'/dashboard'} className="">
                  {<Home />}
                </a>
              </Button>
              <Button key={'Log'} variant={'nav'} size={'max'}>
                <a href={'/log'} className="">
                  {<PenTool />}
                </a>
              </Button>
              <Button key={'Calendar'} variant={'nav'} size={'max'}>
                <a href={'/calendar'} className="">
                  {<Calendar />}
                </a>
              </Button>
              <Button key={'Knowledge'} variant={'nav'} size={'max'}>
                <a href={'/knowledge'} className="">
                  {<Scroll />}
                </a>
              </Button>
              <Button key={'Account'} variant={'nav'} size={'max'}>
                <a href={'/account'} className="">
                  {<User />}
                </a>
              </Button>
              {/* <NavMobile items={data.navMobile}/> */}
            </div>
            <div className="hidden ml-4 w-full flex-1 md:flex">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/dashboard">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Knowledge</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <main className="flex w-full flex-1 flex-col">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}