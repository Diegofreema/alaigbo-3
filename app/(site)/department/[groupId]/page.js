import Agric from '@/components/departments/Agric';
import Creative from '@/components/departments/Creative';
import Education from '@/components/departments/Education';
import Entertainment from '@/components/departments/Entertainment';
import Finance from '@/components/departments/Finance';
import Healthcare from '@/components/departments/Healthcare';
import Housing from '@/components/departments/Housing';
import Ict from '@/components/departments/Ict';
import Legal from '@/components/departments/Legal';
import Manufacture from '@/components/departments/Manufacture';
import Media from '@/components/departments/Media';
import Mining from '@/components/departments/Mining';
import Politics from '@/components/departments/Politics';
import Research from '@/components/departments/Research';
import Security from '@/components/departments/Security';
import Sports from '@/components/departments/Sports';
import Tourism from '@/components/departments/Tourism';
import Transportation from '@/components/departments/Transportation';
import Urban from '@/components/departments/Urban';
import React from 'react';

const Group = ({ params }) => {
  switch (params.groupId) {
    case 'education':
      return <Education />;
      break;
    case 'agriculture':
      return <Agric />;
      break;
    case 'ict':
      return <Ict />;
      break;
    case 'manufacture':
      return <Manufacture />;
      break;
    case 'research':
      return <Research />;
      break;
    case 'creative':
      return <Creative />;
      break;
    case 'entertainment':
      return <Entertainment />;
      break;
    case 'sports':
      return <Sports />;
      break;
    case 'transportation':
      return <Transportation />;
      break;
    case 'housing':
      return <Housing />;
      break;
    case 'urban':
      return <Urban />;
      break;
    case 'media':
      return <Media />;
      break;
    case 'healthcare':
      return <Healthcare />;
      break;
    case 'mining':
      return <Mining />;
      break;
    case 'tourism':
      return <Tourism />;
      break;
    case 'security':
      return <Security />;
      break;
    case 'finance':
      return <Finance />;
      break;
    case 'politics':
      return <Politics />;
      break;
    case 'legal':
      return <Legal />;
      break;

    default:
      return <div>Loading...</div>;
      break;
  }
};

export default Group;
