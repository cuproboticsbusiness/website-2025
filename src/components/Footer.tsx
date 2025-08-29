import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-[clamp(1rem,5%,3rem)] py-10 w-screen z-50 mt-8">
      <div className="border-t-2 border-white flex justify-between items-center pt-4 max-w-[96rem] mx-auto">
        <div className="w-3/4 flex-column gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="Cup Robotics Logo"
              width={48}
              height={48}
              priority
              className="sm:w-[clamp(3rem,20%,4rem)] sm:h-[clamp(3rem,20%,4rem)]"
            />
            <div className="text-2xl lg:text-4xl">
              <p>CUP</p>
              <p>ROBOTICS</p>
            </div>
          </div>

          <span className="italic">
            This organization is a registered student organization of Cornell
            University
            <br />
            <Link
              href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
              target="_blank"
              className="underline"
            >
              Equal Education and Employment
            </Link>
          </span>

          <div className="flex flex-col gap-4 sm:gap-8 sm:flex-row">
            <div>
              <p className="font-bold text-cup-red">ADDRESS:</p>
              <p>272 Rhodes Hall Ithaca, NY 14853</p>
            </div>

            <div>
              <p className="font-bold text-cup-red">CONTACT:</p>
              <a href="mailto:ccrt@cornell.edu">
                <p>ccrt@cornell.edu</p>
              </a>
            </div>
          </div>

          <p>©2010-2025 Cornell Cup Robotics</p>
        </div>

        <div className="flex-column gap-8">
          <Link
            href="https://www.instagram.com/cornellcuprobotics/?hl=en"
            target="_blank"
            rel="noopener"
            className="rounded-md overflow-hidden"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={36}
              height={36}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/company/cornell-cup-robotics/"
            target="_blank"
            rel="noopener"
            className="rounded-md overflow-hidden"
          >
            <Image src="/linkedin.png" alt="LinkedIn" width={36} height={36} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
