import RobotDesc from "@/components/project/RobotDesc";
import XRP from "@/data/project/xrp.json";
import C1C0 from "@/data/project/c1c0.json";
import spaceXRP from "@/data/project/spaceXRP.json";
import { notFound } from "next/navigation";

const Robot = async ({ params }: { params: { robot: string } }) => {
  const { robot } = await params;
  const getRobot = () => {
    switch (robot) {
      case "xrp":
        return XRP;
      case "c1c0":
        return C1C0;
      case "spacexrp":
        return spaceXRP;
      default:
        return notFound();
    }
  };
  return <RobotDesc {...getRobot()} />;
};

export default Robot;
