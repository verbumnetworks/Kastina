// import Link from 'next/link';
// import HomilyCard from '../homily/HomilyCard';
// import { homilies } from '@/lib/homilies';

// export default function HomePage() {
//   const latestHomilies = homilies.slice(0, 3);

//   return (
//     <section className="bg-gray-100 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-[#0C1A2B] mb-4">
//           Latest from our <span className="text-black">Archbishop</span>
//         </h2>
//         <div className="w-24 h-1 bg-[#D6A739] mx-auto mb-10 rounded-full" />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {latestHomilies.map(homily => (
//             <HomilyCard key={homily.id} homily={homily} />
//           ))}
//         </div>

//         <div className="mt-10 flex justify-center">
//           <Link
//             href="/homily"
//             className="border border-[#D6A739] text-[#D6A739] py-2 px-6 rounded-full hover:bg-[#D6A739] hover:text-white transition"
//           >
//             Want more homilies?
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
