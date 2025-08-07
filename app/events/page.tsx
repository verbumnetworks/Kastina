import Image from 'next/image';
import Link from 'next/link';
import { getAllNews } from '@/lib/db/news';


export default async function LatestNews() {
  const news = await getAllNews();

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2
         
          className="text-3xl md:text-4xl font-bold text-center text-[#0C1A2B] mb-4"
        >
          Latest from our Bishop
        </h2>

        <div className="w-24 h-1 bg-[#D6A739] mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3 grid gap-8 md:grid-cols-2">
            {news.map((item) => (
              <div
              key={item.id}
                
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <Link href={`/news/${item.id}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(item.date).toDateString()}
                    </p>
                    <h3 className="text-xl font-semibold text-[#0C1A2B] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{item.summary}</p>
                    <span className="text-[#D6A739] font-semibold hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#0C1A2B] mb-4 border-b pb-2">Latest News</h3>
            <ul className="space-y-4">
              {news.map((item) => (
                <li key={item.id}>
                  <Link href={`/news/${item.id}`} className="text-[#D6A739] hover:underline text-sm">
                    {item.title}
                  </Link>
                  <p className="text-xs text-gray-500">
                    {new Date(item.date).toDateString()}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
