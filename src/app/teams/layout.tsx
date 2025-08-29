import PageHeader from "@/components/PageHeader";
import TeamNav from "@/components/team/TeamNav";

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader
        src={"/team3.jpeg"}
        title={"Meet the Team"}
        desc={
          "We’re a team of 70+ undergrad and grad students passionate about building cutting-edge robots and sharing our work every step of the way."
        }
      />
      <main className="page-section w-full h-full flex-column justify-center items-center gap-4">
        <TeamNav />
        {children}
      </main>
    </>
  );
}
