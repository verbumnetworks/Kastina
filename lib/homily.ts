// lib/news.ts
export type HomilyItem = {
  slug: string; // nicer URLs, optional if you prefer id
  title: string;
  date: Date;
  summary: string;
  content: string; // full body for single page
  image: string;
  author?: string;
  userId: string // optional, if you want to include an author
};

export const homilies: HomilyItem[] = [
  {
    slug: "pope-francis-announces-new-encyclical",
    title: "Pope Francis Announces New Encyclical",
    date: new Date("2025-07-15"),
    summary:
      "The Holy Father has released a new encyclical emphasizing peace and unity in a fragmented world.",
    content:
      "Full write-up goes here. You can add headings, quotes, and more details…",
    image: "/assets/popeleo1.jpeg",
    // author: "John Doe",
    userId: "68960d59e8925882e971ae01", // Assuming the user ID of the author
  },
  {
    slug: "world-youth-day-reflections",
    title: "World Youth Day Reflections",
    date: new Date("2025-07-10"),
    summary:
      "Young Catholics from across the globe gathered to share stories of faith, hope, and renewal.",
    content:
      "Long-form article body for WYD reflections... lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/popeleo2.jpeg",
    // author: "John Doe",
    userId: "68960d59e8925882e971ae01", // Assuming the user ID of the author
  },
  {
    slug: "local-diocese-hosts-faith-seminar",
    title: "Local Diocese Hosts Faith Seminar",
    date: new Date("2025-07-05"),
    // author: "Jane Smith",
    summary:
      "A weekend of learning and community engagement hosted at the Cathedral of St. John.",
    content: "Seminar details, speakers, schedule, and outcomes…",
    image: "/assets/popeleo3.jpeg",
    userId: "68960d59e8925882e971ae02", // Assuming the user ID of the author
  },
];
