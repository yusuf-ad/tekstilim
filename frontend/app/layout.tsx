import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/layout/footer/Footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ana Sayfa - Tekstilim ",
  description:
    "Tekstilim, en kaliteli kumaşlarla en uygun fiyatlarla sizi buluşturuyor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={jost.className} lang="en">
      <body className="flex min-h-screen flex-col bg-white-500  selection:bg-tertiary-100 selection:text-dark-500">
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
