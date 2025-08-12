'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';

const galleryImages = [
  {
    src: '/assets/building1.jpg',
    title: 'Parish Office Building',
    description: 'The newly completed parish office complex.',
  },
  {
    src: '/assets/building2.jpg',
    title: 'Main Cathedral',
    description: 'Front view of the Cathedral in evening light.',
  },
  {
    src: '/assets/building3.jpg',
    title: 'Youth Formation Centre',
    description: 'Training ground for youth and catechists.',
  },
  {
    src: '/assets/building4.jpg',
    title: 'Bishop’s Residence',
    description: 'The serene home of the diocesan bishop.',
  },
  {
    src: '/assets/building5.jpg',
    title: 'Chapel of Adoration',
    description: 'A quiet place for perpetual Eucharistic adoration.',
  },
  {
    src: '/assets/building6.jpg',
    title: 'Diocesan Library',
    description: 'Equipped for theological and spiritual studies.',
  },
];

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);

  return (
    <main className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Diocesan Gallery
        </h1>

        {/* True Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4 [column-fill:_balance]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow cursor-pointer group relative transition-transform hover:scale-[1.02]"
              onClick={() => setIndex(i)}
            >
              <Image
                src={img.src}
                alt={img.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg transition duration-500 ease-in-out group-hover:blur-[1px]"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                <h3 className="text-lg font-semibold">{img.title}</h3>
                <p className="text-sm mt-1">{img.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={galleryImages}
          on={{ view: ({ index }) => setIndex(index) }}
          plugins={[Zoom, Fullscreen, Thumbnails, Captions]}
          captions={{
            showToggle: true,
            descriptionTextAlign: 'center',
          }}
        />
      </div>
    </main>
  );
}
