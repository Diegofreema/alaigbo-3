import Agric from '@/components/departments/Agric';
import Creative from '@/components/departments/Creative';
import Education from '@/components/departments/Education';
import Entertainment from '@/components/departments/Entertainment';
import Healthcare from '@/components/departments/Healthcare';
import Housing from '@/components/departments/Housing';
import Ict from '@/components/departments/Ict';
import Manufacture from '@/components/departments/Manufacture';
import Media from '@/components/departments/Media';
import Mining from '@/components/departments/Mining';
import Research from '@/components/departments/Research';
import Sports from '@/components/departments/Sports';
import Tourism from '@/components/departments/Tourism';
import Transportation from '@/components/departments/Transportation';
import Urban from '@/components/departments/Urban';
import React from 'react';

const Group = ({ params }) => {
  switch (params.groupId) {
    case '1':
      return <Education />;
      break;
    case '2':
      return <Agric />;
      break;
    case '3':
      return <Ict />;
      break;
    case '4':
      return <Manufacture />;
      break;
    case '5':
      return <Research />;
      break;
    case '6':
      return <Creative />;
      break;
    case '7':
      return <Entertainment />;
      break;
    case '8':
      return <Sports />;
      break;
    case '9':
      return <Transportation />;
      break;
    case '10':
      return <Housing />;
      break;
    case '11':
      return <Urban />;
      break;
    case '12':
      return <Media />;
      break;
    case '13':
      return <Healthcare />;
      break;
    case '14':
      return <Mining />;
      break;
    case '15':
      return <Tourism />;
      break;

    default:
      return <div>Group</div>;
      break;
  }
};

export default Group;
