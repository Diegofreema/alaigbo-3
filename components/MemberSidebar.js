import React from 'react';
import TitleComponent from './mantine/TitleComponent';
import { ScrollArea } from './ui/scroll-area';
import Image from 'next/image';
import TextComponent from './mantine/TextComponent';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '../lib/utils';

const MemberSidebar = ({ imgUrl, department }) => {
  return (
    <ScrollArea className="h-[100vh] bg-[#131313] w-full md:pt-24 pt-10 ">
      <TitleComponent mb={30} fz={'lg'} color={'white'} ta={'center'}>
        Alaigbo
      </TitleComponent>
      <div className="flex  justify-center ">
        <div className="overflow-hidden relative  rounded-full h-12 w-12 mr-4">
          <Image
            alt="profile-image"
            src={imgUrl || '/download.jpg'}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <TextComponent
            color={'white'}
            fs={'md'}
            fw={'bold'}
            text={'Diego Eke'}
          />
          <TextComponent color={'#DE5000'} text={'Member'} />
          <TextComponent color={'#898C8F'} text={`${department} Department`} />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href={'/update-profile'}
          className={cn(buttonVariants({ variant: 'link' }))}
        >
          Edit profile
        </Link>
      </div>
    </ScrollArea>
  );
};

export default MemberSidebar;
