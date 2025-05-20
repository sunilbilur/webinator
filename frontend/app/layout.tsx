// app/layout.tsx
"use client"
import "@/app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";

const inter = Inter({ subsets: ["latin"] });
const metadata: Metadata = {
  title: "Webinator",
  description: "Wix-like visual website builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
