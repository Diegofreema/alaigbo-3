import React from 'react';
import SponsorCard from './SponsorCard';
const images = [
  {
    src: '/nanocodes.png',
    text: 'Nanocodes Programming',
    url: 'https://www.nanocodes.com.ng',
  },
  {
    src: '/iiii.jpg',
    text: 'Voice of The East',
    url: '',
  },

  {
    src: '/img2.jpg',
    text: 'Ruoya Nigeria',
    url: '',
  },
  {
    src: '/i.jpg',

    url: '',
  },
  {
    src: '/iii.jpg',

    url: '',
  },
  {
    src: '/ii.jpg',

    url: '',
  },

  {
    src: '/img3.jpg',
    text: 'Service Culture Academy',
    url: '',
  },
  {
    src: '/last.jpg',
    text: 'Reliable Technology',
    url: '',
  },
];

const Sponsor = () => {
  return (
    <div className="bg-[#AFBD7733] py-[100px] min-h-screen px-2">
      <div className="container mx-auto">
        <h2 className="text-3xl  md:text-5xl text-center font-bold mb-[100px]">
          Our <span className="text-[#F37435]">Partners</span>
        </h2>
        <div className="text-center flex justify-center">
          <p className="text-xl text-center max-w-[650px]">
            All our partners are working towards making sure Alaigbo becomes the
            technology hub of Africa by 2050.
          </p>
        </div>
        <div className="flex min-w-[210px] overflow-x-auto no-scrollbar gap-12 lg:gap-16 mt-[100px]">
          {images.map(({ src, text, url }) => (
            <SponsorCard key={src} src={src} text={text} url={url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
