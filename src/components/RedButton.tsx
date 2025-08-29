import { cn } from "@/lib/utils";
import Link from "next/link";

type RedButtonProp = {
  text: string;
  href: string;
  target?: string;
  rel?: string;
  download?: boolean;
  className?: string;
};

const RedButton = ({
  text,
  href,
  target,
  rel,
  download,
  className,
}: RedButtonProp) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      download={download}
      className={cn(
        className,
        "text-lg px-6 py-2 pb-3 bg-cup-red transition-all duration-300 hover:scale-105 hover:bg-red-800 rounded-full text-white"
      )}
    >
      {text}
    </Link>
  );
};

export default RedButton;
