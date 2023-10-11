import React from 'react';
import Sidebar from './_components/Sidebar';

const layout = ({ children }) => {
  return (
    <div className="!overflow-x-hidden relative">
      <Sidebar />
      <div className="md:ml-20">{children}</div>
      <Sidebar mobile />
    </div>
  );
};

export default layout;
