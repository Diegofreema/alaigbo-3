import Link from 'next/link';
import React from 'react';

const StreamComponent = ({ stream }) => {
  return (
    <iframe
      src={stream?.link}
      width="100%"
      height="100%"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen="true"
    ></iframe>
  );
};

export default StreamComponent;
