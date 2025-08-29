import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="page-section w-full h-full flex-column justify-center items-center gap-8 relative">
      <Link
        href={"/projects"}
        className="absolute top-10 left-10 sm:left-12 text-white flex gap-2 p-4 cursor-pointer hover:scale-105 hover:gap-3 transition-all duration-300"
      >
        <ArrowLeftIcon color="white" /> <p>Go Back</p>
      </Link>
      {children}
    </main>
  );
}
