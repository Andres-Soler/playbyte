import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameMood",
  description: "Cyberpunk game recommendation app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
            
            <Link
              href="/"
              className="text-xl font-black tracking-widest text-cyan-400"
            >
              GAMEMOOD
            </Link>

            <div className="flex gap-4">
              <Link
                href="/"
                className="rounded-xl px-4 py-2 transition hover:bg-white/10"
              >
                Home
              </Link>

              <Link
                href="/mood"
                className="rounded-xl px-4 py-2 transition hover:bg-white/10"
              >
                Mood Scanner
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}