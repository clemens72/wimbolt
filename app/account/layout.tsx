import type { Metadata } from "next";
import "@/app/globals.css"
import { StandardNavDrawer } from "@/components/drawer";
import { WidgetCalendar } from "@/components/ui/calendar";

export const metadata: Metadata = {
  title: "WiMBL | Account",
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

interface AccountLayoutProps {
  children?: React.ReactNode
}

export default async function AccountLayout({
  children
}: AccountLayoutProps) {
  // const user = await getCurrentUser()


  // if (!user) {
  //   return notFound()
  // }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <main className="grid gap-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <div className="hidden md:w-20 md:col-span-2 flex-col md:flex lg:col-span-2">
          {/* <StandardNavDrawer /> */}
        </div>
        <div className="flex flex-col col-span-12 md:col-span-6 lg:col-span-7">
          {children}
        </div>
        <div className="hidden lg:col-span-3 mr-4 flex-col lg:flex">
          <WidgetCalendar />
        </div>
      </main>
    </div>
  )
}