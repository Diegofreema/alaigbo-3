import { fetchMembers } from '@/lib/actions/user.actions';
import Filter from '../_components/Filter';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const page = async () => {
  const { publicMetadata } = await currentUser();
  if (!publicMetadata?.admin) {
    redirect('/');
  }
  const mainMembers = await fetchMembers();
  const members = mainMembers.map((member, i) => {
    return {
      firstName: member?.firstName,
      lastName: member?.lastName,
      email: member?.email,
      number: member?.number,
      state: member?.state,
      town: member?.town,
      village: member?.village,
      gender: member?.gender,
      i,
      id: member?._id?.toString(),
    };
  });

  return (
    <div className="min-h-screen py-[120px]  h-[100vh] !overflow-x-scroll px-6">
      <div className="">
        <Filter member={members} />
      </div>
    </div>
  );
};

export default page;
