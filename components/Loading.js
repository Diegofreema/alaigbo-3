import { Loader } from 'lucide-react';
import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader color="black" size={50} className="animate-spin" />
    </div>
  );
};

export default Loading;
