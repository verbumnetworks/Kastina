import About from "./components/home/About";
import CoatOfArmsSection from "./components/home/CoatOfArm";
import Hero from "./components/home/Hero";
import LatestNews from "./components/home/LatestNews";
import HomilySection from "./components/home/HomilySection";


export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <About />
        <LatestNews />
        <HomilySection />
<CoatOfArmsSection/>
      </main>
    </div>
  );
}
