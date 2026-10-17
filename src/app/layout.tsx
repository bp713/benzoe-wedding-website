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
            <footer className="py-6 sm:py-8">
              <iframe
                data-testid="embed-iframe"
                title="Wedding playlist on Spotify"
                src="https://open.spotify.com/embed/playlist/7nmTrtXJw6xFgwlRnQ3kdz?utm_source=generator&theme=0&si=d4d1dd68f0194f93"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </footer>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
