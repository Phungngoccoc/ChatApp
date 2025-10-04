import type { Metadata } from "next";
import { Alata } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/header";
import Footer from "@/components/footer";

const alata = Alata({
  variable: "--font-alata",
  subsets: ["vietnamese"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Anime Vietsub Online - AnimeVietSub",
  description: "Anime Vietsub Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alata.variable} antialiased bg-[#1e282d]`}
      >
        <Toaster />
        <div className="">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}