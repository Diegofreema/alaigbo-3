import React from 'react';
import StreamButton from '../../stream/_component/StreamButton';
import StreamComponent from './_component/StreamComponent';
import StreamModal from '../../../../components/form/AddStream';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { getStream } from '../../../../lib/actions/stream.action';
import { Skeleton } from '../../../../components/ui/skeleton';
const page = async () => {
  const { id, publicMetadata } = await currentUser();
  const admin = publicMetadata?.admin || false;
  if (!id && !admin) {
    redirect('/');
  }
  const streams = await getStream();
  if (!streams) {
    return (
      <div className="py-[100px]  w-[90%] mx-auto">
        <StreamButton />
        <SkeletonCom />
      </div>
    );
  }
  return (
    <>
      <StreamModal />
      <div className="py-[100px]  w-[90%] mx-auto">
        <StreamButton />
        <div className="mt-10 grid-cols-1 md:grid-cols-2 gap-5">
          {Array.isArray(streams) && streams?.length > 0 ? (
            streams.map((stream) => (
              <StreamComponent key={stream?.id} stream={stream} />
            ))
          ) : (
            <div>
              <p className="text-center text-bold">No streams</p>
            </div>
          )}
        </div>
      </div>
    </>
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
