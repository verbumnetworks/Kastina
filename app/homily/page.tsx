import HomilyCard from '@/app/components/homily/HomilyCard';
import { homilies } from '@/lib/homilies';

export default function HomiliesPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">All Homilies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {homilies.map(homily => (
          <HomilyCard key={homily.id} homily={homily} />
        ))}
      </div>
    </div>
  );
}
