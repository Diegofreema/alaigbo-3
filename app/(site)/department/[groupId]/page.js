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
import { fetchUserMember } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import React from 'react';

const Group = async ({ params }) => {
  const { id } = await currentUser();
  const member = await fetchUserMember(id);
  const { group, memberType } = member;
  switch (params.groupId) {
    case 'education':
      return (
        <Education
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'agriculture':
      return (
        <Agric params={params.groupId} group={group} memberType={memberType} />
      );
      break;
    case 'ict':
      return (
        <Ict params={params.groupId} group={group} memberType={memberType} />
      );
      break;
    case 'manufacture':
      return (
        <Manufacture
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'research':
      return (
        <Research
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'creative':
      return (
        <Creative
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'entertainment':
      return (
        <Entertainment
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'sports':
      return (
        <Sports params={params.groupId} group={group} memberType={memberType} />
      );
      break;
    case 'transportation':
      return (
        <Transportation
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'housing':
      return (
        <Housing
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'urban':
      return (
        <Urban params={params.groupId} group={group} memberType={memberType} />
      );
      break;
    case 'media':
      return (
        <Media params={params.groupId} group={group} memberType={memberType} />
      );
      break;
    case 'healthcare':
      return (
        <Healthcare
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'mining':
      return (
        <Mining params={params.groupId} group={group} memberType={memberType} />
      );
      break;
    case 'tourism':
      return (
        <Tourism
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'security':
      return (
        <Security
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'finance':
      return (
        <Finance
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'politics':
      return (
        <Politics
          params={params.groupId}
          group={group}
          memberType={memberType}
        />
      );
      break;
    case 'legal':
      return (
        <Legal params={params.groupId} group={group} memberType={memberType} />
      );
      break;

    default:
      return <div>Loading...</div>;
      break;
  }
};

export default Group;
