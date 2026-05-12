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
  metadataBase: new URL("https://sellxsell.com"),
  title: {
    default: "SellXSell | Revenue Operating System",
    template: "%s | SellXSell",
  },
  description:
      "SellXSell is an inspection-driven revenue operating system for exposing pipeline risk and building a defensible forecast.",
  openGraph: {
    title: "SellXSell | Revenue Operating System",
    description:
        "Expose pipeline risk, inspect real deals, and build a defensible revenue forecast.",
    url: "https://sellxsell.com",
    siteName: "SellXSell",
    images: [
        {
        url: "/og-sellxsell.png",
        width: 1200,
        height: 630,
        alt: "SellXSell",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SellXSell | Revenue Operating System",
    description:
        "Expose pipeline risk, inspect real deals, and build a defensible revenue forecast.",
    images: ["/og-sellxsell.png"],
  },
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
