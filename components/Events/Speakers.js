'use client';
import { Image } from '@mantine/core';
import React from 'react';
const speakers = [
  {
    url: '/p.jpg',
  },
  {
    url: '/p2.jpg',
  },
  {
    url: '/p3.jpg',
  },
  {
    url: '/p4.jpg',
  },
  {
    url: '/p5.jpg',
  },
  {
    url: '/p6.jpg',
  },
  {
    url: '/Photocard6.jpg',
  },
  {
    url: '/Photocard7.jpg',
  },
  {
    url: '/Photocard8.jpg',
  },
  {
    url: '/Photocard10.jpg',
  },
  {
    url: '/Photocard11.jpg',
  },
  {
    url: '/Photocard12.jpg',
  },
  {
    url: '/Photocard15.jpg',
  },
  {
    url: '/Photocard16.jpg',
  },
  {
    url: '/Photocard17.jpg',
  },
  {
    url: '/Photocard18.jpg',
  },
  {
    url: '/Photocard19.jpg',
  },
  {
    url: '/Photocard20.jpg',
  },
  {
    url: '/Photocard21.jpg',
  },
  {
    url: '/Photocard22.jpg',
  },
  {
    url: '/Photocard23.jpg',
  },
  {
    url: '/Photocard25.jpg',
  },
  {
    url: '/Photocard26.jpg',
  },
  {
    url: '/Photocard27.jpg',
  },
  {
    url: '/Photocard28.jpg',
  },
  {
    url: '/pi.jpg',
  },
];
const Speakers = () => {
  return (
    <div className="bg-[#F6FBD6] min-h-[700px] py-[100px]">
      <h1 className="text-[#00AA00] font-bold text-3xl sm:text-4xl text-center mb-8">
        Meet Our Speakers
      </h1>
      <div className="grid items-center place-content-center lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1 justify-center mx-auto w-[95%] md:w-[80%]">
        {speakers.map(({ url, name, job }, i) => (
          <div className="bg-gray-100 rounded-md overflow-hidden" key={i}>
            <Image
              src={url}
              alt="img"
              width={'100%'}
              height={'100%'}
              fit="contain"
            />
            <div className="pl-2 pb-2">
              <p className="font-bold mb-2">{name}</p>
              <p className="text-xs font-light">{job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
