import "./globals.css";

import type { Metadata } from "next";
import { Josefin_Sans, Noto_Sans_JP } from "next/font/google";

import { GradationBackground } from "@/components/GradationBackground";
import { LoadingScreen } from "@/components/LoadingScreen";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hotaka Okumoto",
    template: "%s | hota.codes",
  },
  description:
    "I am a programmer. I like to create technologies that make it fun to create and interested in Computer Science and UI/UX Design.",
  keywords: "Engineer, Programmer, Portfolio, Shizuoka, 静岡",
  openGraph: {
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${josefinSans.variable} ${notoSansJP.variable}`}>
        <LoadingScreen />
        <GradationBackground />

        <main>{children}</main>
      </body>
    </html>
  );
}
