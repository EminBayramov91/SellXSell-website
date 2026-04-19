import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SellXSell",
  description: "Inspection-driven revenue operating system.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.className}>
      <div className="site-shell">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      </body>
      </html>
  );
}
