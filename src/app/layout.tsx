import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cornell Cup Robotics",
  description:
    "The official website of the Cornell Cub Robotics, Systems Engineering Project Team",
};

const Exo2 = Exo_2({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Exo2.className}>
      <body className="antialiased overflow-hidden max-w-screen">
        <ScrollToTop />
        <Navbar />

        <div className="fixed w-screen h-screen -z-10 overflow-hidden">
          <Image
            alt="background"
            src="/fiber.jpg"
            fill
            className="object-cover opacity-30 animate-moveUp"
          />
          <Image
            alt="background"
            src="/fiber.jpg"
            fill
            className="object-cover translate-y-full opacity-30 animate-moveUp"
          />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
