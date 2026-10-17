import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Header from "../components/Header";
import "../index.css";

export const metadata: Metadata = {
  title: "Zoe and Ben's Wedding",
  description: "Information for Zoe and Ben's wedding at Rise Hall.",
  icons: {
    icon: "/interlocking-hearts.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white text-[#85BDCC] font-serif min-h-screen">
          <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
