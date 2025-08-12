import prisma from "@/lib/prisma";
import About from "./components/home/About";
import BishopSection from "./components/home/Bishop";
import CoatOfArmsSection from "./components/home/CoatOfArm";
import Hero from "./components/home/Hero";
import LatestHomilies from "./components/home/LatestHomilies";
import UpcomingAnnouncementsSection from "./components/home/UpcomingAnnouncementsSection";
import LatestEvents from "./components/home/LatestEvents";

export default async function Home() {
  const homilies = await prisma.homily.findMany({
    orderBy: { date: "desc" },
    take: 3,
    select: {
      slug: true,
      title: true,
      date: true,
      summary: true,
      image: true,
    },
  });
  
  return (
    <div>
      <main className="">
        <Hero />
        <BishopSection />
        <About />
        <LatestHomilies homilies={homilies} />
        <CoatOfArmsSection />
        <LatestEvents />
        <UpcomingAnnouncementsSection />
      </main>
    </div>
  );
}
