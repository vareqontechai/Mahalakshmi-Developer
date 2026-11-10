import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import EnquiryProvider from "@/components/enquiry/EnquiryProvider";
import { site } from "@/data/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Premium Plots in Nagpur`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${montserrat.variable} flex min-h-screen flex-col font-sans antialiased`}>
  <EnquiryProvider>
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingActions />
  </EnquiryProvider>
</body>
    </html>
  );
}