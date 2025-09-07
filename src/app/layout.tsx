import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { LikeProvider } from "./context/LikeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florist Diyora",
  description: "Gullar va nafislik olami",
  icons: {
    icon: "/favicon.jpg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <CartProvider>
          <LikeProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </LikeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
