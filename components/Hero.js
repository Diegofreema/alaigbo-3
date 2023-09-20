'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,

    arrows: true,
    dots: false,
  };
  return (
    <div className="h-screen w-full flex">
      <Slider {...settings} className="!w-full">
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
      </Slider>
    </div>
  );
};

export default Hero;
