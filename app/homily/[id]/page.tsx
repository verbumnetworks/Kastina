import { homilies } from '@/lib/homilies';
import { notFound } from 'next/navigation';

export default async function HomilyDetail({ params }: { params: { id: string } }) {
  const homily = homilies.find(h => h.id === params.id);

  if (!homily) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <img src="/bishop-coat.svg" alt="Coat of Arms" className="h-24 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-center mb-2">{homily.title}</h1>
      <p className="text-center text-sm text-gray-500">{homily.date} • {homily.location}</p>
      <hr className="my-6 border-gray-300" />
      <div className="prose max-w-none">{homily.content}</div>
    </div>
  );
}
