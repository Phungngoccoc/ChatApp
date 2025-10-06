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

        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-0 text-white">
            <div className="flex justify-center h-fit pt-4 px-1">
              <div className="container lg:!px-0 xl:!px-25 2xl:!px-50">{children}
              </div>
            </div>
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}