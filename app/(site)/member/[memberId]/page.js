import EventCard from '@/components/Events/EventCard';
import IdentityCard from '@/components/IdentityCard';
import MemberSidebar from '@/components/MemberSidebar';
import { fetchInvestor, fetchUserMember } from '@/lib/actions/user.actions';

import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import moment from 'moment-timezone';

const MemberPage = async () => {
  const { id } = await currentUser();
  if (!id) {
    redirect('/');
  }
  const isMember = await fetchUserMember(id);
  const isInvestor = await fetchInvestor(id);
  // const utcMoment = moment.utc(isMember?.dob);
  // const date = utcMoment.tz('Africa/Lagos').format('DD/MM/YYYY');

  if (!isMember?.isOnboarded && !isInvestor?.isOnboarded) {
    return redirect('/accountType');
  }

  return (
    <div className="min-h-[100vh] w-full sm:pb-0 pb-10 relative grid grid-cols-12 place-content-center  ">
      <div className="hidden lg:!flex col-span-3">
        <MemberSidebar imgUrl={isMember?.imgUrl} department={isMember?.group} />
      </div>

      <div className=" lg:col-span-9 col-span-12">
        <div className="w-[90%] md:w-[85%] mx-auto mt-10 md:mt-28">
          <h1 className="text-3xl font-bold text-center md:text-start mt-24">{`Welcome ${isMember?.firstName}`}</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-10">
            <div className="sm:col-span-2">
              <IdentityCard
                memberId={isMember?.memberId}
                imgUrl={isMember?.imgUrl}
                lastName={isMember?.lastName}
                firstName={isMember?.firstName}
                middleName={isMember?.middleName}
                state={isMember?.state}
                lga={isMember?.lga}
                town={isMember?.town}
                placeOfBirth={isMember?.placeOfBirth}
                village={isMember?.village}
                familyName={isMember?.familyName}
                gender={isMember?.gender}
                memberType={isMember?.memberType}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
