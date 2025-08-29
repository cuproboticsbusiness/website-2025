import Member from "@/components/team/Member";
import Alums from "@/data/team/alums.json";
import Business from "@/data/team/business.json";
import Electrical from "@/data/team/electrical.json";
import Leads from "@/data/team/leads.json";
import Mechanical from "@/data/team/mechanical.json";
import Software from "@/data/team/software.json";
import { notFound } from "next/navigation";

const teamDataMap = {
  mechanical: Mechanical,
  electrical: Electrical,
  software: Software,
  business: Business,
  alums: Alums,
  leads: Leads,
};
export async function generateStaticParams() {
  return Object.keys(teamDataMap).map((team) => ({
    team: team,
  }));
}

type Params = Promise<{ team: string }>;

const Team = async (props: { params: Params }) => {
  const params = await props.params;
  const team = params.team ?? "leads";

  const currentTeamData = teamDataMap[team as keyof typeof teamDataMap];
  if (!currentTeamData) return notFound();

  return (
    <section className="w-full flex flex-wrap gap-10 items-center justify-center">
      {currentTeamData.map((member: any, index: number) => (
        <Member key={member.name + index} {...member} />
      ))}
    </section>
  );
};

export default Team;
