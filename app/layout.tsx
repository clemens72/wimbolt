import type { Metadata } from "next";
import "./globals.css"
import { Provider } from  "./provider";

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
          {children}
        </body>
      </Provider>
    </html>
  );
}