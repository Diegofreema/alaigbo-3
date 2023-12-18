import { fetchMember } from '../../../../../lib/actions/user.actions';
import React from 'react';
import DetailCard from './_components/DetailCard';

const page = async ({ params }) => {
  const member = await fetchMember(params?.memberId);
  console.log(member);
  return (
    <div className="md:py-[130px] py-[100px]">
      <DetailCard
        firstName={member?.firstName}
        lastName={member?.lastName}
        email={member?.email}
        number={member?.number}
        state={member?.state}
        town={member?.town}
        village={member?.village}
        gender={member?.gender}
        memberType={member?.memberType}
        memberId={member?.memberId}
        imgUrl={member?.imgUrl}
        id={member?.id}
        group={member?.group}
        middleName={member?.middleName}
        bio={member?.bio}
      />
    </div>
  );
};

export default page;
