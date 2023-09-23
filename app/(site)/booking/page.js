import EventRegistration from '@/components/form/EventRegistration';
import { alreadyBooked } from '@/lib/actions/book.actions';
import { fetchInvestor, fetchUserMember } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';

import { redirect } from 'next/navigation';

const EventOnboard = async () => {
  const { id } = await currentUser();
  if (!id) {
    redirect('/');
  }
  const isMember = await fetchUserMember(id);
  const isInvestor = await fetchInvestor(id);
  const isBooked = await alreadyBooked();

  if (!isMember?.isOnboarded && !isInvestor?.isOnboarded) {
    return redirect('/accountType');
  }

  return (
    <div className="min-h-screen py-[150px] w-[95%] md:w-[85%] mx-auto">
      <h1 className="text-2xl md:text-4xl capitalize font-bold text-center">
        Book a seat at the upcoming summit
      </h1>

      <div>
        <EventRegistration isBooked={isBooked} />
      </div>
    </div>
  );
};

export default EventOnboard;
