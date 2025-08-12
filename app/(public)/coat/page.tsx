'use client';
import Image from 'next/image';

export default function CoatOfArmsPage() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            About the Coat of Arms
          </h1>
          <p className="text-gray-600 mt-2">
            Understanding the Heraldic Symbols and Meaning of Bishop Gerald Mamman Musa&apos;s Crest
          </p>
        </div>

        {/* Image */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/assets/logo.jpg"
            alt="Coat of Arms"
            width={300}
            height={300}
            className="rounded shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none mx-auto">
          <p>
            Coats of arms, originating in Europe during the late 11th century, were initially
            employed on the battlefield for warriors to distinguish their comrades. These same
            symbols were later utilised on seals to verify the authenticity of documents.
          </p>

          <p>
            The Catholic Church also used seals to establish legitimacy and ownership. These seals
            evolved from personal likenesses to impersonal shields representing dioceses. Martial
            helmets and coronets were replaced with ecclesiastical hats, retaining the shield.
          </p>

          <p>
            Today, a bishop&apos;s formal heraldic representation (episcopal heraldic achievement)
            includes personal and diocesan symbols: a shield, hat, scroll with motto, and cross.
          </p>

          <h2>The Coat of Arms (Crest) of Bishop Gerald Mamman Musa</h2>
          <p>
            Bishop Gerald upholds heraldic tradition with a shield bearing symbols, a scroll with
            his motto, a bishop&rsquo;s hat (gallero), and a processional cross. The green gallero
            with six tassels on each side signifies his rank. The scroll contains his motto written
            in Hausa: <strong>Ubangiji Na Tare Da Mu</strong> (&ldquo;The Lord is with us&rdquo;),
            echoing Jesus&apos; promise in Matthew 28:20.
          </p>

          <h3>The Holy Spirit</h3>
          <p>
            The dove represents the Holy Spirit&rsquo;s subtle yet powerful presence, guiding and
            empowering believers and evangelization efforts in Katsina Diocese.
          </p>

          <h3>Corn</h3>
          <p>
            Symbolizing divine provision through nature, the corn plant—common in Katsina and a
            staple food—represents sustenance and life for agrarian communities.
          </p>

          <h3>Northern Knot</h3>
          <p>
            Historically found on Hausa buildings and in early church mosaics, the Northern Knot
            symbolizes unity and Christian-Muslim coexistence. It encourages collaborative
            peacebuilding in Nigeria&rsquo;s diverse religious landscape.
          </p>

          <blockquote>
            &ldquo;The Lord is with us&rdquo; expresses enduring divine presence and serves as a
            source of courage and hope amid uncertainty.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
