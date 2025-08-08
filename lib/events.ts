export type EventItem = {
  id: string;
  slug: string;
  title: string;
  date: string; 
  excerpt: string;
  cover: string;
  images: string[];
  content: string[];
};

export const events: EventItem[] = [
  {
    id: "evt-o-lumen-ecclesiae",
    slug: "o-lumen-ecclesiae",
    title: "O Lumen Ecclesiae",
    date: "2025-08-08",
    excerpt:
      "On August 8, we celebrate St. lorem  augue vehicula elit, in dapibus justo nulla nec purus.",
    cover: "/assets/groto.jpg",
    images: [
      "/assets/building1.jpg",
      "/assets/building2.jpg",
      "/assets/building3.jpg",
    ],
    content: [
      "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, lorem vel tincidunt gravida, ligula augue vehicula elit, in dapibus justo nulla nec purus. Vestibulum ac tortor ut libero dictum tristique. Sed consectetur ligula nec justo lacinia, non tincidunt neque convallis. In hac habitasse platea dictumst. Donec blandit augue at vestibulum fermentum. Ut rutrum diam at felis varius, nec vestibulum nisi facilisis. Integer iaculis nisi a neque pulvinar finibus. Cras a sem vitae sapien suscipit accumsan sed a enim.",
      "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, lorem vel tincidunt gravida, ligula augue vehicula elit, in dapibus justo nulla nec purus. Vestibulum ac tortor ut libero dictum tristique. Sed consectetur ligula nec justo lacinia, non tincidunt neque convallis. In hac habitasse platea dictumst. Donec blandit augue at vestibulum fermentum. Ut rutrum diam at felis varius, nec vestibulum nisi facilisis. Integer iaculis nisi a neque pulvinar finibus. Cras a sem vitae sapien suscipit accumsan sed a enim.",
      "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, lorem vel tincidunt gravida, ligula augue vehicula elit, in dapibus justo nulla nec purus. Vestibulum ac tortor ut libero dictum tristique. Sed consectetur ligula nec justo lacinia, non tincidunt neque convallis. In hac habitasse platea dictumst. Donec blandit augue at vestibulum fermentum. Ut rutrum diam at felis varius, nec vestibulum nisi facilisis. Integer iaculis nisi a neque pulvinar finibus. Cras a sem vitae sapien suscipit accumsan sed a enim.",
    ],
  },
  {
    id: "evt-mary-martha-2025",
    slug: "mary-and-martha-balance-of-faith",
    title: "Mary, Martha, and the Balance of Faith",
    date: "2025-07-29",
    excerpt:
      "lorem isump dolor sit amet, consectetur adipiscing elit. Fusce tristique, lorem vel tincidunt gravida, ligula augue vehicula elit, in dapibus justo nulla nec purus.",
    cover: "/assets/logo.jpg",
    images: [
      "/assets/popeleo.jpeg",
      "/assets/popeleo1.jpeg",
    ],
    content: [
      "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, lorem vel tincidunt gravida, ligula augue vehicula elit, in dapibus justo nulla nec purus. Vestibulum ac tortor ut libero dictum tristique. Sed consectetur ligula nec justo lacinia, non tincidunt neque convallis. In hac habitasse platea dictumst. Donec blandit augue at vestibulum fermentum. Ut rutrum diam at felis varius, nec vestibulum nisi facilisis. Integer iaculis nisi a neque pulvinar finibus. Cras a sem vitae sapien suscipit accumsan sed a enim.",
      "lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, lorem vel tincidunt gravida, ligula augue vehicula elit, in dapibus justo nulla nec purus. Vestibulum ac tortor ut libero dictum tristique. Sed consectetur ligula nec justo lacinia, non tincidunt neque convallis. In hac habitasse platea dictumst. Donec blandit augue at vestibulum fermentum. Ut rutrum diam at felis varius, nec vestibulum nisi facilisis. Integer iaculis nisi a neque pulvinar finibus. Cras a sem vitae sapien suscipit accumsan sed a enim.",
    ],
  },
  {
    id: "evt-st-jude-2025",
    slug: "i-came-from-st-jude",
    title: `"I came from St. Jude"`,
    date: "2025-07-24",
    excerpt:
      "After several miscarriages, Dr. Arthur Lawrence saw his life as a gift of intercession.",
    cover: "/assets/building9.jpg",
    images: [
      "/assets/building1.jpg",
      "/assets/building2.jpg",
      "/assets/building4.jpg",
      "/assets/building9.jpg",
    ],
    content: [
      "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, lorem vel tincidunt gravida, ligula augue vehicula elit, in dapibus justo nulla nec purus. Vestibulum ac tortor ut libero dictum tristique. Sed consectetur ligula nec justo lacinia, non tincidunt neque convallis. In hac habitasse platea dictumst. Donec blandit augue at vestibulum fermentum. Ut rutrum diam at felis varius, nec vestibulum nisi facilisis. Integer iaculis nisi a neque pulvinar finibus. Cras a sem vitae sapien suscipit accumsan sed a enim.",
      "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, lorem vel tincidunt gravida, ligula augue vehicula elit, in dapibus justo nulla nec purus. Vestibulum ac tortor ut libero dictum tristique. Sed consectetur ligula nec justo lacinia, non tincidunt neque convallis. In hac habitasse platea dictumst. Donec blandit augue at vestibulum fermentum. Ut rutrum diam at felis varius, nec vestibulum nisi facilisis. Integer iaculis nisi a neque pulvinar finibus. Cras a sem vitae sapien suscipit accumsan sed a enim.",
    ],
  },
];

// Helpers
export const getLatestEvents = (limit = 3) =>
  [...events].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, limit);

export const getEventBySlug = (slug: string) =>
  events.find((e) => e.slug === slug);
