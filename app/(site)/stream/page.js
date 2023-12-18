import { currentUser } from '@clerk/nextjs';
import { getStream } from '../../../lib/actions/stream.action';
import React from 'react';
import StreamComponent from '../admin/stream/_component/StreamComponent';
const page = async () => {
  const streams = await getStream();
  if (!streams) {
    return (
      <div className="py-[100px]  w-[90%] mx-auto">
        <StreamButton />
        <SkeletonCom />
      </div>
    );
  }

  const singleStream = streams[0];
  return (
    <div className="min-h-screen h-[100vh] w-full">
      <div className="mt-10 h-full grid-cols-1 md:grid-cols-2 gap-5">
        {<StreamComponent stream={singleStream} />}
      </div>
    </div>
  );
};

export default page;

const SkeletonCom = () => {
  return (
    <div className="mt-10 grid-cols-1 md:grid-cols-2 gap-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton className="w-full h-[300px]" key={index} />
      ))}
    </div>
  );
};
