import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vyxen Study Abroad",
  description: "Vyxen Study Abroad is your AI-powered passport to studying abroad. We help students find the right country, program, and pathway — faster, easier, smarter.",
  icons : {
    icon: "/logoS.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} font-medium antialiased`}
      > 
        <Header/>
        {children}
      </body>
    </html>
  );
}
