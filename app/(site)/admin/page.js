import BookCard from './_components/BookCard';
import { fetchMembers } from '@/lib/actions/user.actions';
import { findBooked } from '@/lib/actions/book.actions';
import TextComponent from '@/components/mantine/TextComponent';
import Link from 'next/link';

const page = async () => {
  const members = await fetchMembers();

  const booked = await findBooked();
  const bookedForEvent =
    booked.length > 0 ? (
      booked?.map((book, i) => (
        <BookCard
          key={i}
          name={`${book.firstName} ${book.lastName}`}
          imgUrl={book.imgUrl}
        />
      ))
    ) : (
      <h2 className="font-semibold text-center text-2xl">
        Nobody Has booked for this event yet
      </h2>
    );

  const allMembers =
    members?.length > 0 ? (
      members
        ?.slice(0, 10)
        .map((member, i) => (
          <BookCard
            key={i}
            name={`${member.firstName} ${member.lastName}`}
            imgUrl={member.imgUrl}
          />
        ))
    ) : (
      <h2 className="font-semibold text-center text-2xl">No Members</h2>
    );

  return (
    <div className="min-h-screen py-[120px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 px-6 gap-8">
        <div className="bg-gray-300 p-3 shadow-md shadow-black rounded-md">
          <h1 className="text-2xl font-bold text-center mb-5">
            Booked For Event
          </h1>
          {bookedForEvent}
          {booked.length > 0 && (
            <Link
              href="/admin/members "
              className="mt-8 inline-block bg-orange-500 p-2 rounded-md text-white"
            >
              View All
            </Link>
          )}
        </div>
        <div className="bg-gray-300 p-3 shadow-md shadow-black rounded-md">
          <h1 className="text-2xl font-bold text-center mb-5">Members</h1>
          {allMembers}
          {members.length > 0 && (
            <Link
              href="/admin/members "
              className="mt-8 inline-block bg-orange-500 p-2 rounded-md text-white"
            >
              View All
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
