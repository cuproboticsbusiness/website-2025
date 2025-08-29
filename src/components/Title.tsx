import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type TitleProp = {
  text: string;
  font?: string;
  outerClass?: string;
  innerClass?: string;
};

const Title = ({ text, font, outerClass, innerClass }: TitleProp) => {
  return (
    <h1 className={cn(outerClass, "font-bold text-center mx-auto")}>
      <Reveal>
        <span
          className={cn(
            innerClass,
            font || "text-[clamp(2rem,8vw,3rem)]",
            "inline-block border-b-2 border-cup-red px-4"
          )}
        >
          {text}
        </span>
      </Reveal>
    </h1>
  );
};

export default Title;
