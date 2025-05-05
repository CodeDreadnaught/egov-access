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

export const metadata: Metadata = {
  title: "eGov Access",
  description:
    "eGov Access is your go-to platform for seamless access to Nigerian Government services and efficient  communication with the Plateau State Government.",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  verification: { google: "hS4vQ7NbMeaP-FFOg9wQF3ouO44MU8xXpmBAPTnqif4" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
