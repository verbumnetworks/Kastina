'use client';

const bankDetails = [
  {
    bank: 'First Bank of Nigeria',
    accountName: 'Catholic Diocese of Katsina',
    accountNumber: '1234567890',
  },
  {
    bank: 'Zenith Bank',
    accountName: 'CDK Mission Fund',
    accountNumber: '2009876543',
  },
];

// const projects = [
//   {
//     title: 'Cathedral Renovation',
//     image: '/assets/popeleo1.jpeg',
//     need: 'To restore the historic structure and expand seating capacity. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.            lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     title: 'Support Seminarians',
//     image: '/assets/groto.jpg',
//     need: 'To provide food, books, and seminary training materials. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.           lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     title: 'Mission Schools',
//     image: '/assets/building2.jpg',
//     need: 'To equip classrooms and build rural schools. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.           lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.         lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     title: 'Pastoral Centre Construction',
//     image: '/assets/building1.jpg',
//     need: 'For site preparation and phase 1 construction.   lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.           lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.S',
//   },
// ];

export default function DonatePage() {
  return (
    <main className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Support the Mission</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your generosity helps us grow the mission of Christ in our diocese. Whether it&apos;s for building projects,
            seminary formation, or outreach ministries — every gift counts.
          </p>
        </section>

        {/* Bank Details */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Bank Details</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {bankDetails.map((bank, idx) => (
              <div
                key={idx}
                className="bg-blue-50 p-6 rounded shadow-sm border border-blue-100"
              >
                <h3 className="text-lg font-semibold mb-2">{bank.bank}</h3>
                <p>
                  <span className="font-medium">Account Name:</span> {bank.accountName}
                </p>
                <p>
                  <span className="font-medium">Account Number:</span> {bank.accountNumber}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Needing Support */}
       {/* <section>
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Projects Needing Support</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">{proj.title}</h3>
                  <p className="text-gray-600 text-sm">{proj.need}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
*/}

        {/* Closing */}
        <section className="text-center">
          <p className="text-gray-700">
            To make donations in cash or kind, please contact the Diocesan Finance Office or the Bishop&apos;s Secretariat.
          </p>
        </section>
      </div>
    </main>
  );
}
