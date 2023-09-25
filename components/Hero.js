'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import Image from 'next/image';

const Hero = () => {
  const images = [
    {
      original: '/d1.jpg',
    },
    {
      original: '/d2.jpg',
    },
    {
      original: '/d3.jpg',
    },
    {
      original: '/d4.jpg',
    },
    {
      original: '/d5.jpg',
    },
    {
      original: '/d6.jpg',
    },
    {
      original: '/d7.jpg',
    },
    {
      original: '/d8.jpg',
    },
    {
      original: '/d9.jpg',
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
