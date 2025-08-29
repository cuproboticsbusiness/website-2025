import PageHeader from "@/components/PageHeader";
import ProjectDisplay from "@/components/project/ProjectDisplay";
import Title from "@/components/Title";
import CurrentProjects from "@/data/project/currentProjects.json";

const Projects = () => {
  return (
    <>
      <PageHeader
        src={"/projects/project_banner.jpg"}
        title={"Our Robots"}
        desc={
          "We work on multiple innovative projects throughout the school year. Each of our projects are led by a dedicated team lead and made up of members from all subteams. This year, our two main projects are C1C0 and Minibot."
        }
      />

      <main className="page-section w-full h-full flex-column justify-center items-center gap-8 text-white">
        {/* CURRENT PROJECTS */}
        <section className="w-full h-full flex-column">
          <Title text={"Projects"} />
          <ProjectDisplay arr={CurrentProjects} />
        </section>
      </main>
    </>
  );
};

export default Projects;
