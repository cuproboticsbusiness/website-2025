"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";

const TABS = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "PROJECTS",
    href: "/projects",
  },
  {
    name: "TEAMS",
    href: "/teams",
  },
  {
    name: "SPONSORS",
    href: "/sponsors",
  },
  {
    name: "RECRUITMENT",
    href: "/recruitment",
  },
];

enum NAV {
  MOBILE_OPEN,
  MOBILE_CLOSED,
  DESKTOP,
  TRANSITION,
}

const Navbar = ({ isHome = false }: { isHome?: boolean }) => {
  const [state, setState] = useState(NAV.DESKTOP);
  const pathname = usePathname();
  const currTab = `/${pathname.split("/")[1]}`;

  useEffect(() => {
    const initial = window.innerWidth < 640 ? NAV.TRANSITION : NAV.DESKTOP;
    setState(initial);
    document.body.style.overflow = "scroll";

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setState((prev) => (prev === NAV.DESKTOP ? NAV.TRANSITION : prev));
      } else {
        setState(NAV.DESKTOP);
        document.body.style.overflow = "scroll";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isHome && pathname === "/") return null;

  const getHB = (index: number) => {
    if (state === NAV.MOBILE_OPEN) return `hamburger-${index}`;
    else if (state === NAV.MOBILE_CLOSED) return `x-${index}`;
    else return "";
  };

  const stateTransition = () => {
    switch (state) {
      case NAV.MOBILE_OPEN:
        setState(NAV.MOBILE_CLOSED);
        document.body.style.overflow = "scroll";
        break;
      case NAV.TRANSITION:
      case NAV.MOBILE_CLOSED:
        setState(NAV.MOBILE_OPEN);
        document.body.style.overflow = "hidden";
        break;
      default:
        setState(NAV.DESKTOP);
    }
  };

  return (
    <nav
      id={"navbar"}
      className={cn(
        "z-50 sticky top-0 w-screen flex px-[clamp(1rem,5%,3rem)] pt-8 bg-black",
        state === NAV.MOBILE_OPEN && styles.dropDown,
        state === NAV.MOBILE_CLOSED && styles.collapseUp
      )}
    >
      {/* BLUR BAR */}
      <div className="absolute w-screen h-16 top-27 lg:top-29 left-0 bg-gradient-to-b from-black to-transparent -z-10" />

      <div
        className={cn(
          "w-screen flex justify-between text-white border-b-2 border-white pb-4 max-w-[96rem] mx-auto ",
          state === NAV.DESKTOP && "items-center"
        )}
      >
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt={"Cup Robotics Logo"}
            width={96}
            height={96}
            priority
            className="w-16 sm:w-[clamp(4rem,25%,6rem)] h-16 sm:h-[clamp(4rem,25%,6rem)] hover:scale-105 transition duration-300 ease-out"
          />
        </Link>

        {/* MOBILE HAMBURGER */}
        <div
          id={styles.hamburgerWrapper}
          className={cn("flex flex-col cursor-pointer sm:hidden")}
          onClick={() => {
            stateTransition();
            if (isHome) {
              const navbar = document.querySelector("#navbar") as HTMLElement;
              const navbarRect = navbar.getBoundingClientRect();
              window.scrollTo({
                top: Math.min(window.scrollY + navbarRect.top, 3800),
                behavior: "smooth",
              });
            }
          }}
        >
          <div id={styles[getHB(1)]} />
          <div id={styles[getHB(2)]} />
          <div id={styles[getHB(3)]} />
        </div>

        {/* TAB DISPLAY */}
        <ul
          className={cn(
            state === NAV.DESKTOP
              ? "hidden sm:flex list-none gap-4 md:text-xl lg:text-2xl"
              : "absolute-center flex-column items-center text-3xl gap-8",
            state === NAV.MOBILE_OPEN
              ? styles.showItem
              : state !== NAV.DESKTOP && styles.hideItems
          )}
        >
          {TABS.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                onClick={stateTransition}
                className={cn(
                  "p-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-out bg-gradient-to-r from-[var(--cup-red)] to-[var(--cup-red)] bg-no-repeat",
                  "bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-[position:50%_100%]",
                  currTab === href && "bg-[length:100%_2px] font-bold"
                )}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
