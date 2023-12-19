import React from 'react';

import StreamComponent from './_component/StreamComponent';

import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const page = async () => {
  const { id, publicMetadata } = await currentUser();
  const admin = publicMetadata?.admin || false;
  if (!id && !admin) {
    redirect('/');
  }

  return (
    <div className="py-[100px] min-h-screen  w-[90%] mx-auto">
      <StreamComponent />
    </div>
  );
};

const SkeletonCom = () => {
  return (
    <div className="mt-10 grid-cols-1 md:grid-cols-2 gap-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton className="w-full h-[300px]" key={index} />
      ))}
    </div>
  );
};
export default page;
