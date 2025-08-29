"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const TABS = [
  { label: "Mechanical", href: "/teams/mechanical" },
  { label: "Electrical", href: "/teams/electrical" },
  { label: "Software", href: "/teams/software" },
  { label: "Business", href: "/teams/business" },
];

const TeamNav = () => {
  const pathname = usePathname().split("teams/")[1];
  const [tab, setTab] = useState(
    pathname.charAt(0).toUpperCase() + pathname.substring(1)
  );

  useEffect(
    () => setTab(pathname.charAt(0).toUpperCase() + pathname.substring(1)),
    [pathname]
  );

  return (
    <nav className="w-full text-white text-center pb-8 px-10">
      <div className="flex justify-center items-center gap-4 md:text-xl lg:text-2xl mb-4">
        <Link
          href={"/teams/leads"}
          className={cn(
            "p-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-out bg-gradient-to-r from-[var(--cup-red)] to-[var(--cup-red)] bg-no-repeat",
            "bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-[position:50%_100%]",
            tab === "Leads" &&
              "bg-[length:100%_2px] bg-[position:50%_100%] font-bold"
          )}
        >
          Leads
        </Link>
        {/* <Link
          href={"/teams/alums"}
          className={cn(
            "p-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-out bg-gradient-to-r from-[var(--cup-red)] to-[var(--cup-red)] bg-no-repeat",
            "bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-[position:50%_100%]",
            tab === "Alums" &&
              "bg-[length:100%_2px] bg-[position:50%_100%] font-bold"
          )}
        >
          Alums
        </Link> */}
      </div>

      <ul className="flex flex-wrap justify-center items-center list-none gap-4 md:text-xl lg:text-2xl">
        {TABS.map(({ label, href }) => (
          <li key={label} onClick={() => setTab(label)}>
            <Link
              href={href}
              className={cn(
                "p-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-out bg-gradient-to-r from-[var(--cup-red)] to-[var(--cup-red)] bg-no-repeat",
                "bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-[position:50%_100%]",
                tab === label &&
                  "bg-[length:100%_2px] bg-[position:50%_100%] font-bold"
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TeamNav;
