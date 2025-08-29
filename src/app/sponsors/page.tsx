import Image from "next/image";
import Sponsor from "@/data/sponsor/sponsor.json";
import PageHeader from "@/components/PageHeader";
import Title from "@/components/Title";
import RedButton from "@/components/RedButton";

export default function Sponsors() {
  return (
    <main className="w-full text-white">
      {/* INTRO */}
      <PageHeader
        src={"/sponsors/sponsor-header-temp.jpg"}
        title={"Team Sponsors"}
        desc={
          "We’re incredibly grateful to our sponsors and collaborators whose generous support fuels our team's success. If you’d like to join this amazing community of supporters, we invite you to explore our sponsorship packet, opportunities, or make a donation!"
        }
        children={
          <div className="flex justify-center w-full gap-4 sm:gap-8 lg:gap-16 sm:text-xl sm:leading-8">
            <RedButton
              text="Download Packet"
              href="/sponsors/Sponsorship_Packet.pdf"
              download
            />
            <RedButton
              text="Donate Now"
              href="https://donate.cornell.edu/ccrt"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        }
      />

      {/* THANK YOU*/}
      <section className="w-full py-8">
        <div className="max-w-[96rem] mx-auto px-6 lg:px-32 text-center flex-column">
          <Title text={"Thank You!"} />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {Sponsor.map(({ name, logo }) => (
              <div
                key={name}
                className="flex-column items-center w-32 h-40 relative transition duration-300 hover:scale-105"
              >
                <span className="w-32 h-32 relative rounded-xl overflow-hidden">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    fill
                    sizes="(max-width:8rem)"
                    className="object-contain"
                  />
                </span>
                <p className="mt-2 text-center">{name}</p>
              </div>
            ))}
          </div>

          {/* JOIN US */}
          <div className="mt-20 flex-column">
            <Title text={"JOIN US"} />
            <p className="mt-4 text-[1.25rem] leading-[1.5rem] max-w-2xl mx-auto">
              Become a part of our mission to advance robotics innovation at
              Cornell. Download our sponsorship packet to learn about
              partnership levels, or make a direct donation to support our
              club’s activities and outreach.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <RedButton
                text="Download Packet"
                href="/sponsorship_packet.pdf"
                download
              />
              <RedButton
                text="Donate Now"
                href="https://donate.cornell.edu/ccrt"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
