'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Hero = () => {
  const images = [
    {
      original: '/1.jpg',
    },
    {
      original: '/2.jpg',
    },
    {
      original: '/3.jpg',
    },
    {
      original: '/4.jpg',
    },
    {
      original: '/5.jpeg',
    },
    {
      original: '/6.jpg',
    },
    {
      original: '/7.jpg',
    },
    {
      original: '/8.jpg',
    },
    {
      original: '/9.jpg',
    },
    {
      original: '/10.jpg',
    },

    {
      original: '/12.jpg',
    },
    {
      original: '/13.jpg',
    },
    {
      original: '/14.jpg',
    },
    {
      original: '/15.jpeg',
    },
    {
      original: '/16.jpg',
    },
    {
      original: '/17.webp',
    },
  ];
  return (
    <div className="h-screen w-full flex">
      <Carousel
        autoPlay
        width={'100%'}
        axis="horizontal"
        className="!w-full"
        infiniteLoop
        interval={2000}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div className="w-full h-screen relative" key={index}>
            <Image
              src={image.original}
              alt="image"
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
