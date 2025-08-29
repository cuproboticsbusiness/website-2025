import Image from "next/image";
import { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeaderProp = {
  src: string;
  title: string;
  desc: string;
  children?: ReactNode;
};

const PageHeader = ({ src, title, desc, children }: PageHeaderProp) => {
  return (
    <div className="w-full h-[60vh] sm:h-[75vh] max-h-[50rem] z-0 relative">
      <Image
        src={src}
        alt={title}
        width={1920}
        height={1080}
        priority
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10" />

      <div className="flex-column items-center justify-center gap-8 text-white text-center w-3/4 h-3/4 absolute left-1/2 -translate-x-1/2 top-[clamp(2rem,12%,50%)] md:top:1/2">
        <Reveal>
          <h1 className="text-[clamp(3rem,8vw,6.25rem)] font-bold max-sm:leading-14">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-cup-red">{title.split(" ").slice(-1)}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2 text-xl xl:text-2xl">{desc}</p>
        </Reveal>
        {children && <Reveal delay={0.25}>{children}</Reveal>}
      </div>
    </div>
  );
};

export default PageHeader;
