import type { Metadata } from "next";
import "@/app/globals.css"
import { notFound } from "next/navigation"
import { getCurrentUser } from "@/lib/session"
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { navMobileItems } from "@/lib/nav-items";
import { Button } from "@/components/ui/button";

//import User from "@/models/User";
//import { dashboardConfig } from "@/config/dashboard"

export const metadata: Metadata = {
  title: "WiMBL | Dashboard",
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

interface DashboardLayoutProps {
  children?: React.ReactNode
}

const navLinks = navMobileItems;

export default async function DashboardLayout({
  children
}: DashboardLayoutProps) {

  // const user = await getCurrentUser()


  // if (!user) {
  //   return notFound()
  // }

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

              {navLinks.map((item) => (
                <Button key={item.title} variant={'nav'} size={'max'}>
                  <a href={item.url}>{item.icon && <item.icon className="size-max" />}</a>
                </Button>              
              ))}
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
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
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