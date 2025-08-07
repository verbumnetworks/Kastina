import About from "./components/home/About";
import BishopSection from "./components/home/Bishop";
import CoatOfArmsSection from "./components/home/CoatOfArm";
import Hero from "./components/home/Hero";
import LatestNews from "./components/home/LatestNews";
import UpcomingAnnouncementsSection from "./components/home/UpcomingAnnouncementsSection";


export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <BishopSection/>
        <About />
        <LatestNews />
        {/* <HomilySection /> */}
<CoatOfArmsSection/>
<UpcomingAnnouncementsSection />
      </main>
    </div>
  );
}
