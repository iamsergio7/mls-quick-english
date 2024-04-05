"use client"

import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


const inter = Montserrat({ subsets: ["latin"] });

{/*export const metadata = {
  title: "Quick English",
  description: "Learn English quickly and easily with Quick English",
};*/}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
        <Toaster />
      </html>
    </ClerkProvider>
  );
}
