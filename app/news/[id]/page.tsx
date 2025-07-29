'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const mockNews = [
  {
    id: '1',
    title: 'Pope Francis Announces New Encyclical',
    date: 'July 15, 2025',
    image: '/assets/popeleo1.jpeg',
    content:
      `The Holy Father has released a new encyclical emphasizing peace and unity in a fragmented world.\n\nThis encyclical serves as a guidepost for modern Christians seeking compassion and justice. It touches on global crises, climate change, and the responsibility of the faithful.\n\nHe says, "As followers of Christ, we are called not to be divided, but to build bridges of hope."`,
  },
  {
    id: '2',
    title: 'World Youth Day Reflections',
    date: 'July 10, 2025',
    image: '/assets/popeleo2.jpeg',
    content:
      `Thousands of young Catholics from across the world gathered in Lisbon to celebrate World Youth Day.\n\nTheir testimonies shared themes of renewed faith, the power of prayer, and personal encounters with Christ.\n\n"This pilgrimage changed me forever," said Maria from Brazil.\n\nIt was a vibrant and prayer-filled celebration of faith.`
  },
  {
    id: '3',
    title: 'Local Diocese Hosts Faith Seminar',
    date: 'July 3, 2025',
    image: '/assets/popeleo3.jpeg',
    content:
      `The Diocese hosted a weekend seminar focused on faith and community building.\n\nWorkshops included themes on interfaith dialogue, youth leadership, and the role of the laity.\n\nIt was attended by clergy, laypeople, and invited speakers.\n\n"It’s empowering to grow spiritually as a community," remarked a local catechist.`
  },
];

const NewsDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const newsItem = mockNews.find((item) => item.id === id);

  if (!newsItem) {
    return <p className="text-center mt-20">News not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={() => router.push('/news')}
        className="mb-6 text-sm text-[#D6A739] hover:underline font-semibold"
      >
        ← Back to All News
      </button>

      {/* News Content */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0C1A2B] mb-2">
          {newsItem.title}
        </h1>
        <p className="text-sm text-gray-500 mb-4">{newsItem.date}</p>

        <div className="relative w-full h-64 md:h-96 rounded overflow-hidden mb-6">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {newsItem.content}
        </p>
      </div>
    </div>
  );
};

export default NewsDetailPage;
