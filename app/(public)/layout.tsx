import type { Metadata } from "next";

import "../globals.css";
import Nav from "../components/navbar/Nav";
import FaithBanner from "../components/faith/FaithBanner";
import { Footer } from "../components/footer/Footer";
import { openSans } from "@/font";



export const metadata: Metadata = {
  title: "Catholic Diocese of Katsina",
  description: "Catholic Diocese of Katsina",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <FaithBanner />
        <Footer />
      </body>
    </html>
  );
}
