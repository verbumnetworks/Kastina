'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clergyData = [
  {
    name: 'Rev Tibebeselassie Abza',
    role: 'Assistant Priest',
    address: '50 Kiora Road Miranda NSW 2228',
    extra: 'Assistant Priest-Miranda\nParish of Our Lady Star of the Sea',
  },
  {
    name: 'Rev Maid Al Hanna',
    role: 'Chaplain - Migrant',
    address: 'PO Box 182 Edensor Park 2176',
    phone: '02 8750 9679',
    extra: 'Chaplain - Migrant - Syriac Catholic Community',
  },
  {
    name: 'Rev fr Gregory Alesi',
    role: 'Deacon',
    address: '26 Ebony Row Menai NSW 2234',
    phone: '02 8522 0300',
    extra: 'Deacon-Cronulla\nParish of St Aloysius of Gonzaga',
  },
   {
    name: 'Rev Fr Gregory Aessi',
    role: 'Deacon',
    address: '26 Ebony Row Menai NSW 2234',
    phone: '02 8522 0300',
    extra: 'Deacon-Cronulla\nParish of St Aloysius of Gonzaga',
  },
   {
    name: 'Rev Fr Gregory Alssi',
    role: 'Deacon',
    address: '26 Ebony Row Menai NSW 2234',
    phone: '02 8522 0300',
    extra: 'Deacon-Cronulla\nParish of St Aloysius of Gonzaga',
  },
   {
    name: 'Rev Fr Gregry Alessi',
    role: 'Deacon',
    address: '26 Ebony Row Menai NSW 2234',
    phone: '02 8522 0300',
    extra: 'Deacon-Cronulla\nParish of St Aloysius of Gonzaga',
  },
   {
    name: 'Rev Fr Greory Alessi',
    role: 'Deacon',
    address: '26 Ebony Row Menai NSW 2234',
    phone: '02 8522 0300',
    extra: 'Deacon-Cronulla\nParish of St Aloysius of Gonzaga',
  },
   {
    name: 'Rev Fr Gegory Alessi',
    role: 'Deacon',
    address: '26 Ebony Row Menai NSW 2234',
    phone: '02 8522 0300',
    extra: 'Deacon-Cronulla\nParish of St Aloysius of Gonzaga',
  },
  // Add more data...
];

const ITEMS_PER_PAGE = 3;

const ClergyDirectory = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [filtered, setFiltered] = useState(clergyData);

  useEffect(() => {
    const result = clergyData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.role.toLowerCase().includes(query.toLowerCase()) ||
      item.address.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
    setPage(1);
  }, [query]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentItems = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <section className="bg-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Clergy and Lay Chaplains</h2>

        {/* Search */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-2/3 border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {currentItems.map((clergy, idx) => (
              <motion.div
                key={idx}
                className="border p-6 rounded shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-2">{clergy.name}</h3>
                <p className="text-yellow-700 font-medium flex items-center mb-2">
                  <span className="mr-2">👤</span>
                  {clergy.role}
                </p>
                <p className="text-gray-600 flex items-center mb-2">
                  <span className="mr-2">📍</span>
                  {clergy.address}
                </p>
                {clergy.phone && (
                  <p className="text-gray-600 flex items-center mb-2">
                    <span className="mr-2">📞</span>
                    {clergy.phone}
                  </p>
                )}
                <p className="text-sm text-gray-500 whitespace-pre-line">{clergy.extra}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-10">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="flex items-center gap-1 px-3 py-2 border rounded disabled:opacity-50"
          >
            <ChevronLeft /> Prev
          </button>

          <p>
            Showing {((page - 1) * ITEMS_PER_PAGE) + 1} -{' '}
            {Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} results
          </p>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="flex items-center gap-1 px-3 py-2 border rounded disabled:opacity-50"
          >
            Next <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClergyDirectory;