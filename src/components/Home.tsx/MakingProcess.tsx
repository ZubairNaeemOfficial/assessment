"use client";

import React from "react";
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import image1 from '../images/01.png';
import image2 from '../images/02.png';
import image3 from '../images/03.png';
import image4 from '../images/04.png';
import image5 from '../images/05.png';
import image6 from '../images/06.png';
import image7 from '../images/07.png';
import image8 from '../images/08.png';
import image9 from '../images/09.png';
import image10 from '../images/10.png';
import image11 from '../images/11.png';
import image12 from '../images/12.png';

// Modify the interface to expect a source with a 'src' property, as Next.js images import with additional attributes
interface Work {
  id: number;
  imgSrc: StaticImageData;
}

const PreviousWorks: React.FC = () => {
  const works: Work[] = [
    { id: 1, imgSrc: image1 },
    { id: 2, imgSrc: image2 },
    { id: 3, imgSrc: image3 },
    { id: 4, imgSrc: image4 },
    { id: 5, imgSrc: image5 },
    { id: 6, imgSrc: image6 },
    { id: 7, imgSrc: image7 },
    { id: 8, imgSrc: image8 },
    { id: 9, imgSrc: image9 },
    { id: 10, imgSrc: image10 },
    { id: 11, imgSrc: image11 },
    { id: 12, imgSrc: image12 },
  ];

  return (
    <div>
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
            PREVIOUS WORKS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {works.map((work) => (
              <div key={work.id} className="bg-white">
                <Image
                  src={work.imgSrc}
                  alt={`Previous work ${work.id}`}
                  className="w-full h-auto object-cover"
                  width={500}  // Set appropriate width based on your design
                  height={500} // Set appropriate height based on your design
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreviousWorks;
