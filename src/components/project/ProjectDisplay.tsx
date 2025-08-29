"use client";
import { useState, CSSProperties, Fragment } from "react";
import { ArrowRightIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TargetSelect from "../TargetSelect";
import Title from "../Title";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./project.module.css";

type ProjectDisplayProp = {
  arr: {
    name: string;
    img: string;
    chart: {
      field: string;
      value: number;
      comment: string;
    }[];
  }[];
};

const ProjectDisplay = ({ arr }: ProjectDisplayProp) => {
  const [projectIndex, setProjectIndex] = useState(-1);
  const [commentIndex, setCommentIndex] = useState(0);

  return (
    <div className="p-4 flex flex-row flex-wrap justify-center transition-all w-full">
      {arr.map(({ name, img, chart }, idx) => (
        <div
          key={idx}
          className={cn(
            styles.card,
            projectIndex === idx
              ? styles.isExpanded
              : projectIndex === -1
              ? styles.isCollapsed
              : styles.isInactive,
            "relative"
          )}
          style={{ "--index": idx } as CSSProperties}
        >
          {/* ROBOT DISPLAY */}
          <TargetSelect
            active={projectIndex === idx}
            className="flex items-center justify-center w-full"
          >
            <div
              className={cn(
                styles.card__inner,
                "relative flex-column items-center justify-center cursor-pointer text-center font-semibold uppercase text-2xl p-8 z-10 transition-all duration-300 ease-in-out hover:scale-105 w-[clamp(16rem,40vw,25rem)] h-[clamp(16rem,40vw,25rem)]",
                projectIndex === idx && "scale-105"
              )}
              onClick={() =>
                setProjectIndex((prev) => (prev === idx ? -1 : idx))
              }
            >
              <Image
                alt={name}
                src={img}
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
              <p>{name}</p>
            </div>

            {projectIndex === idx && (
              <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 mb-1 w-8 h-8 border-l-16 border-r-16 border-b-10 border-l-transparent border-r-transparent border-b-white" />
            )}
          </TargetSelect>

          {/* ROBOT INFO */}
          <AnimatePresence mode="wait">
            {projectIndex === idx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "16rem" }}
                exit={{ opacity: 0, height: 0, border: "black" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={cn(
                  styles.cardExpander,
                  "uppercase flex justify-center items-center text-2xl rounded-xl border-white border-2 w-full relative mt-8"
                )}
              >
                <div className="relative p-4 text-center flex flex-col max-sm:items-center sm:grid grid-cols-4 w-full h-full text-white">
                  <div className="flex items-center justify-between col-span-4 mb-2 max-sm:w-full">
                    <XIcon
                      onClick={() => setProjectIndex(-1)}
                      className="z-10 w-10 h-10 top-2 left-2 p-1 cursor-pointer hover:scale-105 duration-300 transition"
                    />

                    <Title
                      text={name}
                      font="text-3xl sm:text-4xl"
                      outerClass="absolute left-1/2 -translate-x-1/2"
                    />

                    <Link
                      href={`/projects/${name.toLowerCase()}`}
                      className="top-2 right-2 z-10 text-white flex items-center gap-1 sm:gap-2 p-1 cursor-pointer hover:scale-105 hover:gap-3 transition-all duration-300 max-sm:text-sm text-lg"
                    >
                      <p id={styles.learnMoreText}>Learn More</p>
                      <ArrowRightIcon color="white" />
                    </Link>
                  </div>

                  {/* BAR GRAPH */}
                  <div className="w-full col-span-2">
                    {chart.map(({ field, value, comment }, index) => (
                      <Fragment key={field + index}>
                        <div
                          className={cn(
                            styles.chartDisplay,
                            "relative col-span-2 col-start-1 grid grid-cols-5 sm:grid-cols-2"
                          )}
                          onClick={() => setCommentIndex(index)}
                        >
                          <div className="col-span-2 sm:col-span-1 p-2 text-right relative">
                            <p className="text-sm md:text-xl hover:scale-105 hover:-translate-x-2 transition-all duration-300 pr-2 cursor-pointer">
                              {field}
                            </p>
                            <div className="absolute top-0 right-2 border-solid border-r-2 border-cup-red h-full" />
                          </div>
                          <div
                            className={cn(
                              styles.meterBar,
                              "col-start-3 sm:col-start-2 bg-cup-red h-1/2 absolute top-1/2 -translate-y-1/2"
                            )}
                            style={{ "--fill": value } as CSSProperties}
                          />
                        </div>
                        {/* COMMENT */}
                        {commentIndex === index && (
                          <p
                            className={cn(
                              styles.chartText,
                              "absolute col-span-2 col-start-3 top-4/5 sm:top-1/2 w-4/5 left-1/2 -translate-y-1/4 -translate-x-1/2 text-[clamp(0.1rem,3vw,0.8rem)] md:text-xl"
                            )}
                          >
                            {comment}
                          </p>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ProjectDisplay;
