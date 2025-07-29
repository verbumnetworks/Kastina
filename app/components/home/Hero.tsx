'use client';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { motion } from 'framer-motion';

const slides = [
  {
    title: 'POPE FRANCIS',
    subtitle: '1936–2025',
    text: 'The Church in Sydney and Australia joins with people around the world in mourning the passing of the Holy Father, Pope Francis.',
    image: '/assets/popeleo1.jpeg',
  },
  {
    title: 'POPE BENEDICT XVI',
    subtitle: '1927–2022',
    text: 'A brilliant theologian and devoted servant to the Catholic Church, remembered for his humility and leadership.',
    image: '/assets/popeleo2.jpeg',
  },
  {
    title: 'POPE JOHN PAUL II',
    subtitle: '1920–2005',
    text: 'A beloved global spiritual leader who inspired generations through faith, courage, and peace.',
    image: '/assets/popeleo3.jpeg',
  },
  {
    title: 'POPE LEO XIII',
    subtitle: '1810–1903',
    text: 'Known for his social teachings and intellectual guidance during industrial and political change.',
    image: '/assets/popeleo.jpeg',
  },
  {
    title: 'POPE PIUS XII',
    subtitle: '1876–1958',
    text: 'A leader through World War II, remembered for his complex diplomatic efforts and commitment to peace.',
    image: '/assets/popeleo2.jpeg',
  },
  {
    title: 'POPE PAUL VI',
    subtitle: '1897–1978',
    text: 'Led the Church through Vatican II reforms, fostering dialogue between modernity and tradition.',
    image: '/assets/popeleo3.jpeg',
  },
];

export default function HeroCarousel() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
   const [[current], setCurrent] = useState<[number, number]>([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const handleDotClick = (index: number) => {
    if (index === current) return;
    const dir = index > current ? 1 : -1;
    setCurrent([index, dir]);
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onAutoplayTimeLeft={(_, time, progress) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${progress * 30}%`;
            progressRef.current.setAttribute('aria-valuenow', time.toFixed(0));
          }
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse md:flex-row w-full h-full items-stretch">
              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-center items-center text-center px-6 md:px-16 min-h-full bg-white">
                <motion.h2
                  key={`h2-${activeIndex}`}
                  className="text-4xl md:text-6xl font-extrabold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {slide.title}
                </motion.h2>

                <motion.h3
                  key={`h3-${activeIndex}`}
                  className="text-3xl font-bold mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.subtitle}
                </motion.h3>

                <motion.p
                  key={`p-${activeIndex}`}
                  className="mt-4 text-sm md:text-base max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {slide.text}
                </motion.p>

                <motion.button
                  key={`btn-${activeIndex}`}
                  className="mt-6 px-6 py-2 bg-gradient-to-r from-[#B59F6C] to-[#CBC2AE] text-white font-semibold rounded shadow transition-all ease-in-out"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  READ MORE
                </motion.button>
              </div>

              {/* Image Content */}
              <div className="flex-1 relative w-full min-h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev !text-red !text-3xl hidden md:flex z-50" />
        <div className="swiper-button-next !text-white !text-3xl hidden md:flex z-50" />

       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-red-500" : "bg-amber-900"
            }`}
          />
        ))}
      </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-[4px] w-full bg-gray-300 z-40">
          <div
            ref={progressRef}
            className="h-full bg-yellow-600 ease-linear"
            style={{ transition: 'width 0.1s linear' }}
          />
        </div>
      </Swiper>
    </motion.div>
  );
}
