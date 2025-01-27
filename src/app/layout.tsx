import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header/Header";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Joyuri Official",
  description: "Get the latest & accurate information about Joyuri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pretendard.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className={`${pretendard.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
