import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import {
  DynaPuff,
  Geist,
  Geist_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const dynaPuff = DynaPuff({
  variable: "--font-dyna-puff",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Purpose",
  description: "Full-stack Engineer",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${dynaPuff.variable} min-h-dvh bg-background text-foreground antialiased font-sans`}
        suppressHydrationWarning
        style={{
          "--font-sans": "var(--font-geist-sans)",
          "--font-mono": "var(--font-geist-mono)",
        } as React.CSSProperties}
      >
           <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}