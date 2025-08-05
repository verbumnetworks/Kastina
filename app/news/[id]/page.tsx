import { getNewsById } from '@/lib/db/news';
import Image from 'next/image';
import Link from 'next/link';

interface Props  {
  params: Promise< { id: string }>;
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const news = await getNewsById(Number(id));

  if (!news) {
    return <p className="text-center mt-20">News not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href="/news"
        className="mb-6 inline-block text-sm text-[#D6A739] hover:underline font-semibold"
      >
        ← Back to All News
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0C1A2B] mb-2">
          {news.title}
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(news.date).toDateString()}
        </p>

        <div className="relative w-full h-64 md:h-96 rounded overflow-hidden mb-6">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {news.content}
        </p>
      </div>
    </div>
  );
}
