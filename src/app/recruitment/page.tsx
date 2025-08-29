import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Title from "@/components/Title";
import Timeline from "@/data/recruitment/timeline.json";
import FAQ from "@/components/FAQ";
import RedButton from "@/components/RedButton";
import { cn } from "@/lib/utils";

export default function RecruitmentPage() {
  return (
    <main className="w-full text-white">
      {/* HERO */}
      <PageHeader
        src="/home/fullteam1.png"
        title="Join Us"
        desc="Want to make a difference in the world? Here’s the timeline so you know when to apply, attend info sessions, and join us!"
        children={
          <div className="flex justify-center w-full gap-4 sm:gap-8 lg:gap-16 sm:text-xl sm:leading-8">
            <RedButton
              text="Apply here!"
              target="_blank"
              href="https://forms.gle/dXDwnt8Agr8CVLWQ6"
            />
          </div>
        }
      />

      {/* TIMELINE */}
      <section className="w-full px-6 py-8 lg:px-30">
        <div className="max-w-[96rem] mx-auto px-6 lg:px-32 flex-column">
          <Title text={"Our Timeline"} />

          <p className="mt-4 text-center text-2xl max-w-2xl mx-auto">
            Recruitment is full swing! Join us at our upcoming info sessions and
            cofee chats.
          </p>

          <div className="relative mt-12">
            <div className="absolute left-1/2 inset-y-14 w-1 bg-white/50 transform -translate-x-1/2" />

            <ul className="space-y-8">
              {Timeline.map(({ date, label }, idx) => (
                <li key={idx} className="relative flex items-center">
                  {/* CIRCLE */}
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full",
                      new Date().getTime() -
                        new Date(`${date}/2025`).getTime() >=
                        0
                        ? "bg-cup-red"
                        : "bg-white"
                    )}
                  />

                  {/* TEXT */}
                  <div
                    className={cn(
                      "w-1/2 px-4 py-4",
                      idx % 2 === 0
                        ? "text-right mr-auto pr-12"
                        : "text-left ml-auto pl-12"
                    )}
                  >
                    <p className="text-lg md:text-2xl uppercase text-cup-red tracking-widest brightness-200">
                      {date}
                    </p>

                    <p className="mt-1 text-base md:text-2xl]">{label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ENDING */}
          <div className="mt-16 text-center">
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              We can't wait to see you! If you'd like to set up coffee chats,
              head over to our{" "}
              <Link
                href="/teams/leads"
                className="underline hover:text-cup-red"
              >
                Teams
              </Link>{" "}
              page and schedule a chat with the lead of any subteam you're
              interested in!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black px-6 py-8 lg:px-30 flex-column">
        <Title text={"FAQ"} />
        <FAQ />
      </section>
    </main>
  );
}
