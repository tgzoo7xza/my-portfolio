import type { Metadata } from "next";
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

export const metadata = {
  title: "Tam | Thanadilokchai Krutphum",
  description: "เว็บไซต์แนะนำตัวของ Thanadilokchai Krutphum นักศึกษาฝึกงาน ",
    openGraph: {
    title: "ธนดิลกชัย ครุฑพุ่ม | นักศึกษาฝึกงาน",
    description: "เว็บไซต์แนะนำตัวสำหรับสมัครงาน",
    images: ["/T1.jpg"],
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
