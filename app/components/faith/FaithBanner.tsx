'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function FaithBanner() {
  return (
    <section className="relative w-full h-[30vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden bg-[url('/assets/popeleo2.jpeg')] bg-cover bg-center bg-fixed">
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-80" />

      {/* Text Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          I want to learn more about{' '}
          <span className="text-[#D6A739]">
            <Typewriter
              words={['the Sacraments', 'the Mass', 'my Faith', 'the Church']}
              loop={0} // infinite
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
      </div>
    </section>
  );
}
