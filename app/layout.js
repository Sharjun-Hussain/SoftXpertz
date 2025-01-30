"use client";
import { Geist, Geist_Mono, Teko, Saira } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
});

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${saira.variable} font-sans`}>{children}</body>
    </html>
  );
}
