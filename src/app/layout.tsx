import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Footer from "./components/footer";
import { CartProvider } from "./components/cartContext";
import { WishlistProvider } from "./components/Wishlist";
import Header from "./components/Navbar";


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

export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "An awesome e-commerce website built with Next.js",
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
          <WishlistProvider>
          <Header />
          <CartProvider>
            {children}
          </CartProvider>
          <Footer />
          </WishlistProvider>
          
        
      </body>
    </html>
  );
}