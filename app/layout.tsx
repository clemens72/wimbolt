import type { Metadata } from "next";
import "./globals.css"
import { Provider } from "./provider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { BottomNavBar, MenuAppBar } from "@/components/nav-mobile";

export const metadata: Metadata = {
  title: "WiMBL | Keeping the Internet Local",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <AppRouterCacheProvider>
            <div className="flex w-full md:hidden">
              <MenuAppBar />
              <BottomNavBar />
            </div>
            {children}
          </AppRouterCacheProvider>
        </body>
      </Provider>
    </html>
  );
}