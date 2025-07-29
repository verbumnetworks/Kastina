'use client';

export default function FaithBanner() {
  return (
    <section className="relative w-full h-[30vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden bg-[url('/assets/popeleo2.jpeg')] bg-cover bg-center bg-fixed">
      {/* Background Image with Blue Overlay */}
        
        <div className="absolute inset-0 bg-gray-900 opacity-80" />
      

      {/* Text Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          I WANT TO LEARN MORE ABOUT{' '}
          <span className="text-[#D6A739]">MY FAITH</span>
        </h1>
      </div>
    </section>
  );
}
