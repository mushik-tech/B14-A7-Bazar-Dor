import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/shared/Navbar";
import Footer from "@/Components/shared/Footer";
import MarqueeComponent from "@/Components/shared/MarqueeComponent/MarqueeComponent";
import Categories from "@/Components/shared/Categories/Categories";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "A website that help to track the price of products",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${hindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar></Navbar>
        <Categories></Categories>
        <MarqueeComponent></MarqueeComponent>
        <main className="min-h-screen bg-[#E1E8E180]">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
