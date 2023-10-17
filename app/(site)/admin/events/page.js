import moment from 'moment-timezone';
import { fetchEvent } from '@/lib/actions/event.action';
import EventCard from '@/components/EventCard';
import DeleteModal from '@/components/DeleteModal';
import AddEvent from '@/components/AddEvent';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function Event() {
  const { publicMetadata } = await currentUser();
  if (!publicMetadata?.admin) {
    redirect('/');
  }
  const events = await fetchEvent();

  const displayEvents =
    events?.length > 0 ? (
      events?.map((item, i) => {
        const utcStartDate = moment.utc(item?.startDate);

        const utcEndDate = moment.utc(item?.endDate);

        const utcTime = moment.utc(item?.time);
        const startDate = utcStartDate.tz('Africa/Lagos').format('Do MMMM');
        const endDate = utcEndDate.tz('Africa/Lagos').format('Do MMMM YYYY');

        const time = utcTime.tz('Africa/Lagos').format('hh:mm A');
        return (
          <EventCard
            key={i}
            venue={item?.venue}
            eventName={item?.eventName}
            startDate={startDate}
            endDate={endDate}
            time={item?.time}
            imgUrl={item?.imgUrl}
            id={item?.id?.toString()}
            heading={item?.heading}
            subHeading={item?.subHeading}
            description={item?.description}
          />
        );
      })
    ) : (
      <h2 className="text-center font-bold text-xl">No Events Yet</h2>
    );
  return (
    <div className="py-[100px]  w-[90%] mx-auto">
      <DeleteModal />
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 gap-y-8">
        <div>
          <div className="space-y-16">
            <h2 className="text-center font-bold text-xl">Add An Event</h2>
            <AddEvent />
          </div>
        </div>

        <div className="space-y-16">
          <h2 className="text-center font-bold text-xl">Events</h2>

          <div className=" max-h-[500px]  overflow-y-auto   space-y-4">
            {displayEvents}
          </div>
        </div>
      </div>
    </div>
  );
}
