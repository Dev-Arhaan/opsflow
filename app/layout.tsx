import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Outfit } from 'next/font/google'
import { Roboto } from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Roboto_init = Roboto({
  // src: "./fonts/GeistMonoVF.woff",
  // variable: "--font-geist-mono",
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const OutfitInit = Outfit({
  // src: "./fonts/GeistMonoVF.woff",
  // variable: "--font-geist-mono",
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${Roboto_init} ${OutfitInit} ${geistMono.variable} antialiased bg-[#000333]`}
      >
        {children}
      </body>
    </html>
  );
}
