'use client';

export default function DeaneriesSection() {
  const deaneries = [
    {
      name: 'Katsina Central Deanery',
      parishes: ['St. Theresa Cathedral, Katsina', "St. Michael's Parish, Kankia", 'St. Gabriel\'s Parish, Malumfashi'],
    },
    {
      name: 'Katsina South Deanery',
      parishes: ["St. John's Parish, Funtua", 'Our Lady of Perpetual Help, Bakori', 'Holy Cross Parish, Dandume'],
    },
    {
      name: 'Katsina North Deanery',
      parishes: ['Sacred Heart Parish, Daura', "St. Patrick's Parish, Sandamu"],
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Structure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Diocese of Katsina is divided into pastoral deaneries for effective evangelization and administration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deaneries.map((deanery, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded shadow-sm">
              <h3 className="text-xl font-semibold text-yellow-700 mb-4">{deanery.name}</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {deanery.parishes.map((parish, i) => (
                  <li key={i}>{parish}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}