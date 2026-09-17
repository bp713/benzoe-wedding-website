import type { Metadata } from "next";
import Header from "../components/Header";
import EmailSubscribe from "../components/EmailSubscribe";
import "../index.css";

export const metadata: Metadata = {
  title: "Zoe and Ben's Wedding",
  description: "Information for Zoe and Ben's wedding at Rise Hall.",
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
            <footer className="px-2 py-6 text-center text-sm text-[#85BDCC]/70">
              <EmailSubscribe />© {new Date().getFullYear()} Ben & Zoe
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
