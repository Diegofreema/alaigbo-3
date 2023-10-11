import Image from 'next/image';
import React from 'react';

const BookCard = async ({ imgUrl, name }) => {
  return (
    <div className="flex items-center justify-between bg-slate-300 p-2 ">
      <div className="h-10 w-10 overflow-hidden rounded-full relative">
        <Image src={imgUrl} fill priority className="object-cover" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default BookCard;
