import LandingPage from "@/components/home/LandingPage";
import Navbar from "@/components/navbar/Navbar";
import AboutUs from "@/components/home/AboutUs";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <Navbar isHome />
      <AboutUs />
    </div>
  );
}
