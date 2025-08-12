import type { Metadata } from "next";
import "../globals.css";
import { Footer } from "../components/footer/Footer";
import Nav from "../components/navbar/Nav";
import FaithBanner from "../components/faith/FaithBanner";



export const metadata: Metadata = {
  title: "Catholic Diocese of Kastina",
  description: "Catholic Diocese of Kastina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`$ antialiased`}
      >
        <Nav/>
        {children}
        <FaithBanner/>
        <Footer/>
      </body>
    </html>
  );
}
