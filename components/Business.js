import React from 'react';
import TitleComponent from './mantine/TitleComponent';
import TextComponent from './mantine/TextComponent';
import Link from 'next/link';

const Business = () => {
  return (
    <div className="min-h-[400px] relative py-[100px] space-y-5 bg-scott flex-col bg-center bg-cover bg-no-repeat flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 "></div>
      <div className="z-20 flex items-center justify-center space-y-5 flex-col">
        <TitleComponent color={'white'}>
          AYF Business Plan Competition
        </TitleComponent>
        <TextComponent
          color={'white'}
          text={'An opportunity to win N1m Grant for your business'}
        />
        <Link
          href="https://surveyheart.com/form/65289638cdb0d911d899621c"
          className="text-white bg-orange-500 hover:bg-white inline-block p-2 hover:text-orange-500 transition duration-300 w-fit py-2 px-4 mb-4"
        >
          APPLY
        </Link>
      </div>
    </div>
  );
};

export default Business;
