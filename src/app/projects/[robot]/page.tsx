import RobotDesc from "@/components/project/RobotDesc";
import XRP from "@/data/project/xrp.json";
import C1C0 from "@/data/project/c1c0.json";
import spaceXRP from "@/data/project/spaceXRP.json";
import { notFound } from "next/navigation";

const robotDataMap = {
  xrp: XRP,
  c1c0: C1C0,
  spacexrp: spaceXRP,
};
export async function generateStaticParams() {
  return Object.keys(robotDataMap).map((robot) => ({
    robot: robot,
  }));
}

type Params = Promise<{ robot: string }>;

const Robot = async (props: { params: Params }) => {
  const params = await props.params;
  const robot = params.robot;

  const currentRobotData = robotDataMap[robot as keyof typeof robotDataMap];
  if (!currentRobotData) return notFound();

  return <RobotDesc {...currentRobotData} />;
};

export default Robot;
