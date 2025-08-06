import About from "./components/home/About";
import BishopSection from "./components/home/Bishop";
import CoatOfArmsSection from "./components/home/CoatOfArm";
import Hero from "./components/home/Hero";
import LatestNews from "./components/home/LatestNews";


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
      </main>
    </div>
  );
}
