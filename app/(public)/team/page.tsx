import TeamCard from '../../components/team/TeamCard';
import { team } from '../../../lib/team';

export default function TeamPage() {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-center font-medium uppercase tracking-wide text-gray-500 mb-2">
          Our Team
        </p>
        <h2 className="text-4xl font-bold text-center mb-4">
          Meet the Clonify team
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
