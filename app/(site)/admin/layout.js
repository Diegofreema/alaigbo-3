import React from 'react';
import Sidebar from './_components/Sidebar';

const layout = ({ children }) => {
  return (
    <div className=" relative min-h-screen">
      <Sidebar />
      <div className="md:ml-20  overflow-y-auto">{children}</div>
      <Sidebar mobile />
    </div>
  );
};

export default layout;
