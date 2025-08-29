"use client";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MemberProp = {
  name: string;
  image: string;
  role: string;
  major: string;
  email: string;
  desc?: string;
};

const Member = ({ name, image, role, major, email, desc }: MemberProp) => {
  const [open, setOpen] = useState(false);

  const toggleView = (val: boolean) => {
    setOpen(val);
    document.body.style.overflow = val ? "hidden" : "scroll";
  };

  return (
    <>
      <div
        className="w-55 min-h-fit pb-6 text-white text-center rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-[3px_4px_10px_3px_rgba(255,255,255,0.3)] cursor-pointer"
        onClick={() => toggleView(true)}
      >
        <div className="w-full h-[11.25rem] overflow-hidden relative">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:14rem)"
            style={{ objectFit: "cover", transform: "scale(2)" }}
            priority
          />
        </div>
        <h1 className="font-bold text-xl mt-2 text-wrap">{name}</h1>
        <p className="p-2">{role}</p>
        <p>{major}</p>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center text-white"
            onClick={() => toggleView(false)}
          >
            {open && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                }}
                className="absolute min-h-fit py-8 sm:p-8 w-[clamp(18.75rem,50%,25rem)] rounded-xl bg-[rgb(3,8,29)] mt-16 sm:mt-0"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex-column justify-around items-center gap-4 sm:gap-2 min-h-fit">
                  <span className="rounded-2xl overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      width={2560}
                      height={1080}
                      style={{ objectFit: "cover", transform: "scale(2)" }}
                      priority
                    />
                  </span>

                  <div className="h-0.25 w-[clamp(17.5rem,40%,30rem)] bg-cup-red mt-1" />

                  <div className="flex-column items-center justify-evenly w-full text-center gap-4">
                    <h1 className="font-bold text-2xl">{name}</h1>

                    <div className="grid grid-cols-2 w-full gap-y-4 justify-center">
                      <span>
                        <p className="font-bold">PROJECT:</p> {role}
                      </span>
                      <span>
                        <p className="font-bold">MAJOR:</p> {major}
                      </span>
                      <Link
                        href={`mailto:${email}`}
                        className="col-span-2 text-center"
                      >
                        <p className="font-bold">EMAIL:</p> {email}
                      </Link>
                    </div>
                  </div>

                  <p className="mt-4">{desc}</p>
                </div>

                <button
                  className="absolute -top-10 -right-10 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 cursor-pointer"
                  onClick={() => toggleView(false)}
                >
                  <XIcon className="size-5" />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Member;
