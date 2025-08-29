import { cn } from "@/lib/utils";
import RobotRender from "./RobotRender";
import Title from "../Title";

type RobotDescProp = {
  name: string;
  overview: string;
  details: { title: string; text: string }[];
  footer: string;
  render: string;
  camera: number[];
};
const RobotDesc = ({
  name,
  overview,
  details,
  footer,
  render,
  camera,
}: RobotDescProp) => {
  return (
    <section className="page-section text-white w-full h-full">
      <div className="flex-column">
        <Title text={name} />
        <p className="text-center md:w-1/2 mx-auto mt-2">{overview}</p>
      </div>

      <div className="relative flex-column-reverse items-center md:grid md:grid-cols-[1fr_40vw_1fr] gap-4 my-8">
        {details.map(({ title, text }, index) => (
          <div
            key={title}
            className={cn(
              "mb-4 text-center",
              index % 2 == 1 ? "md:col-start-3 md:text-right" : "md:text-left"
            )}
          >
            <strong className="inline-block border-b-2 border-cup-red">
              {title}
            </strong>
            <p>{text}</p>
          </div>
        ))}

        <div className="md:absolute top-0 left-1/2 md:-translate-x-1/2">
          <RobotRender
            name={name}
            render={render}
            cameraPos={camera}
            className="w-[55vw] sm:w-[40vw]"
          />
          <p className="text-[#aaa] text-center w-full">
            Drag to rotate and Pinch to zoom
          </p>
        </div>
      </div>

      <p className="text-center md:w-3/4 mx-auto md:mt-[25vh] mt-8">{footer}</p>
    </section>
  );
};

export default RobotDesc;
