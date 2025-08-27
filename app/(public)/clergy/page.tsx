import prisma from "@/lib/prisma";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Constants
const ITEMS_PER_PAGE = 3;

export default async function ClergyDirectory({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  // Extract search query and page from URL params
  const query = (await searchParams).q?.trim() || "";
  const page = parseInt((await searchParams).page || "1", 10);
  const skip = (page - 1) * ITEMS_PER_PAGE;

  // Build Prisma query
  const where = query
    ? {
        OR: [
          { name: { contains: query, mode: "insensitive" as const } },
          { role: { contains: query, mode: "insensitive" as const } },
          { address: { contains: query, mode: "insensitive" as const } },
        ],
      }
    : {};

  // Fetch clergy count for pagination
  const totalItems = await prisma.clergy.count({ where });

  // Fetch paginated clergy data
  const clergy = await prisma.clergy.findMany({
    where,
    skip,
    take: ITEMS_PER_PAGE,
    orderBy: { name: "asc" }, 
  });

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <section className="bg-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Clergy and Lay Chaplains</h2>

        {/* Search Form */}
        <form className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <input
            type="text"
            name="q"
            placeholder="Search..."
            defaultValue={query}
            className="w-full sm:w-2/3 border border-gray-300 px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
          >
            Search
          </button>
        </form>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clergy.map((item) => (
            <div key={item.id} className="border p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-yellow-700 font-medium flex items-center mb-2">
                <span className="mr-2">👤</span>
                {item.role}
              </p>
               <p className="text-yellow-700 font-medium flex items-center mb-2">
                <span className="mr-2">👤</span>
                {item.parish}
              </p>
              <p className="text-gray-600 flex items-center mb-2">
                <span className="mr-2">📍</span>
                {item.address}
              </p>
              {item.phone && (
                <p className="text-gray-600 flex items-center mb-2">
                  <span className="mr-2">📞</span>
                  {item.phone}
                </p>
              )}
              <p className="text-sm text-gray-500 whitespace-pre-line">{item.extra}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-10">
          <Link
            href={{
              pathname: "/clergy", 
              query: { q: query, page: Math.max(page - 1, 1) },
            }}
            className={`flex items-center gap-1 px-3 py-2 border rounded ${
              page === 1 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <ChevronLeft /> Prev
          </Link>

          <p>
            Showing {(page - 1) * ITEMS_PER_PAGE + 1} -{" "}
            {Math.min(page * ITEMS_PER_PAGE, totalItems)} of {totalItems} results
          </p>

          <Link
            href={{
              pathname: "/clergy",
              query: { q: query, page: Math.min(page + 1, totalPages) },
            }}
            className={`flex items-center gap-1 px-3 py-2 border rounded ${
              page === totalPages ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Next <ChevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
}