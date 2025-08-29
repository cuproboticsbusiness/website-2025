import Image from "next/image";
import Link from "next/link";
import Title from "../Title";
import StatsBar from "./StatsBar";
import TeamDisplay from "./TeamDisplay";
import TargetSelect from "../TargetSelect";

const ROBOT_DISPLAY = [
  { src: "/home/xrp.png", name: "XRP" },
  { src: "/home/c1c0.png", name: "C1C0" },
  { src: "/home/spaceXRP.png", name: "spaceXRP" },
];

export default function AboutUs() {
  return (
    <section className="page-section w-full text-white overflow-hidden flex-column gap-32">
      {/* WHO WE ARE */}
      <div className="flex-column gap-16 translate-y-10">
        <Title text={"Who We Are"} />

        {/* INFO 1 */}
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 text-center md:text-left">
          <span className="h-full w-full">
            <p className="w-full text-xl mb-8">
              <strong className="text-cup-red">Cornell Cup Robotics</strong> is
              a student-led project team focused on designing and building
              innovative robotics and embedded systems. With over 70 members
              from diverse disciplines, we develop real-world technology that
              challenges convention and showcases the future of engineering.
            </p>
            <p className="w-full text-xl">
              Since our founding in 2010, we've showcased our work at major tech
              conferences and events, gaining support from top industry leaders
              and companies. Our mission is to give students hands-on experience
              while demonstrating the creative potential of robotics.
            </p>
          </span>

          <Image
            src="/home/fullteam1.png"
            alt="Full team photo 1"
            width={600}
            height={200}
            className="rounded-2xl w-full md:w-[clamp(25rem,50%,37.5rem)]"
          />
        </div>

        {/* INFO 2 */}
        <div className="flex flex-col md:flex-row-reverse justify-evenly items-center gap-8 text-center md:text-left">
          <span className="h-full w-full">
            <p className="w-full text-xl mb-8">
              We've earned national recognition, including features in the White
              House Fact Sheet on Making (2015 and 2016), and have been invited
              to present at high-profile events like the Embedded Research and
              Education Summit, the National Maker Faire, Walt Disney World, and
              NASA’s Kennedy Space Center.
            </p>
            <p className="w-full text-xl">
              Cornell Systems Engineering has supported Cornell Cup Robotics
              from the very beginning. Through key partnerships with
              organizations like Intel, NASA, ARM, and others. Together, we're
              shaping the future of robotics—one project at a time.
            </p>
          </span>

          <Image
            src="/home/fullteam2.png"
            alt="Full team photo 2"
            width={600}
            height={200}
            className="rounded-2xl w-full md:w-[clamp(25rem,50%,37.5rem)]"
          />
        </div>

        <StatsBar />
      </div>

      {/* WHAT WE DO */}
      <div className="flex-column gap-10 sm:gap-16 text-center">
        <Title text={"What We Do"} />

        <div className="flex flex-row flex-wrap justify-evenly items-center gap-4">
          {ROBOT_DISPLAY.map(({ src, name }, index) => (
            <TargetSelect
              key={index}
              className="flex-column items-center overflow-hidden w-1/3 md:w-1/4 lg:w-50 hover:scale-105 transition duration-300 cursor-pointer p-2"
            >
              <Link
                href={`/projects/${name.toLowerCase()}`}
                className="w-full h-full p-1"
              >
                <Image src={src} alt={name} width={200} height={200} />
                <p className="mt-4 font-semibold uppercase text-2xl">{name}</p>
              </Link>
            </TargetSelect>
          ))}
        </div>

        <Link
          href="/projects"
          className="w-52 mx-auto p-4 border-2 border-cup-red text-white text-lg hover:bg-[var(--cup-red)] transition rounded-full hover:scale-105 duration-300"
        >
          VIEW PROJECTS
        </Link>
      </div>

      {/* OUR TEAM */}
      <div className="text-center flex flex-col gap-16 text-white">
        <Title text={"Our Teams"} />
        <TeamDisplay />
      </div>
    </section>
  );
}
