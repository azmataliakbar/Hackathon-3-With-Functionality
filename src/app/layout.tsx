// src/app/layout.tsx

import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { CartProvider } from "@/app/context/CartContext";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Hackathon - 3",
  description: "E-Commerce Website with functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex justify-between items-center p-4 bg-gray-500 text-white">
            <div>
              <h1 className="text-3xl font-bold hover:text-y-150 hover:text-yellow-300 hover:scale-y-150">Welcome</h1>
            </div>
            <div className="font-bold text-3xl hover:scale-125 hover:text-yellow-300">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main>
            <CartProvider>{children}</CartProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

