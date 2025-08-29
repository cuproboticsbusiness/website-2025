import Member from "@/components/team/Member";
import Alums from "@/data/team/alums.json";
import Business from "@/data/team/business.json";
import Electrical from "@/data/team/electrical.json";
import Leads from "@/data/team/leads.json";
import Mechanical from "@/data/team/mechanical.json";
import Software from "@/data/team/software.json";
import { notFound } from "next/navigation";

const Team = async ({ params }: { params: { team: string } }) => {
  const { team } = await params;
  const getTeam = () => {
    switch (team) {
      case "mechanical":
        return Mechanical;
      case "electrical":
        return Electrical;
      case "software":
        return Software;
      case "business":
        return Business;
      case "alums":
        return Alums;
      case "leads":
        return Leads;
      default:
        return notFound();
    }
  };

  return (
    <section className="w-full flex flex-wrap gap-10 items-center justify-center">
      {getTeam().map((member: any, index: number) => (
        <Member key={member.name + index} {...member} />
      ))}
    </section>
  );
};

export default Team;
